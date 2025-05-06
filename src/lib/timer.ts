// For timer purposes, dirty fix and not optimized.
export interface MottoOptions {
  mottos: string[];
  typingSpeed?: number;
  pauseBetweenMottos?: number;
  loadMessageDuration?: number;
}

export interface MottoState {
  displayedText: string;
  start: () => void;
  onUpdateCallback: (text: string) => void;
}

export function createMottoTimer(options: MottoOptions): MottoState {
  const {
    mottos,
    typingSpeed = 20,
    pauseBetweenMottos = 6000,
    loadMessageDuration = 1500,
  } = options;

  let displayedText = "";
  let mottoIndex = 0;
  let charIndex = 0;
  let showMotto = false;

  let onUpdate: (text: string) => void;
  let timer1: number;
  let timer2: number;

  const notify = () => {
    if (onUpdate) onUpdate(displayedText);
  };

  const typeNextChar = () => {
    if (charIndex < mottos[mottoIndex].length) {
      displayedText += mottos[mottoIndex][charIndex++];
      notify();
      timer1 = window.setTimeout(typeNextChar, typingSpeed);
    } else {
      timer2 = window.setTimeout(() => {
        displayedText = "";
        notify();
        charIndex = 0;
        mottoIndex = (mottoIndex + 1) % mottos.length;
        typeNextChar();
      }, pauseBetweenMottos);
    }
  };

  const start = () => {
    const loadTime = performance.now() / 1000;
    let result = "";

    if (loadTime < 0.5) result = "wow that fast!";
    else if (loadTime > 2) result = "hmm, I need to fix that..";

    displayedText = `page loaded in ${loadTime.toFixed(2)}s${result ? ", " + result : ""}`;
    notify();

    setTimeout(() => {
      displayedText = "";
      notify();
      showMotto = true;
      typeNextChar();
    }, loadMessageDuration);
  };

  return {
    get displayedText() {
      return displayedText;
    },
    start,
    // allows Svelte to updates
    set onUpdateCallback(fn: (text: string) => void) {
      onUpdate = fn;
    },
  };
}
