import React from 'react';

const Link = ({ className, href, children }) => {
  const onClick = (event) => {

    //if user holds command/control and clicks, it will do as its supposed to do and go to that link/component and skip push/pop paths
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }
  return (
    <a onClick={onClick} className={className} href={href}>{children}</a>
  )
}

export default Link;