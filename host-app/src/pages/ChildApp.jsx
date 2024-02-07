import React from "react";
import { useRef, useEffect } from "react";
import { mount } from "Child/ChildApp";
import { useHistory } from "react-router-dom";

const ChildApp = (props) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(
      ref.current,
      {
        initialPath: history.location.pathname,
        onNavigate: ({ pathname: nextPathname }) => {
          const { pathname } = history.location;

          if (pathname !== nextPathname) {
            history.push(nextPathname);
          }
        },
      },
      props
    );

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};

export default ChildApp;
