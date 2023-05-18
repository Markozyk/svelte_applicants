/** Dispatch event on click outside of node */
export function clickOutside(node: HTMLElement, callback?: () => void) {
  const handleClick = (event: Event) => {
    if (node && !node.contains(event.target as HTMLElement) && !event.defaultPrevented) {
      node.dispatchEvent(new CustomEvent('click_outside'));
      callback && callback();
    }
  };

  document.addEventListener('click', handleClick, true);

  return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
    },
  };
}
