type WrapperProps = {
  children: JSX.Element;
};

const Wrapper = ({ children }: WrapperProps) => {
  return <div className="wrap">{children}</div>;
};

export default Wrapper;
