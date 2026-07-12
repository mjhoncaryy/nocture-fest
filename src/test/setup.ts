import '@testing-library/jest-dom/vitest';

class IntersectionObserverMock {
  readonly root = null;
  readonly rootMargin = '';
  readonly thresholds: number[] = [];

  disconnect() {}
  observe() {}
  takeRecords() { return []; }
  unobserve() {}
}

class ResizeObserverMock {
  disconnect() {}
  observe() {}
  unobserve() {}
}

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false
  })
});

Object.assign(globalThis, {
  IntersectionObserver: IntersectionObserverMock,
  ResizeObserver: ResizeObserverMock
});
