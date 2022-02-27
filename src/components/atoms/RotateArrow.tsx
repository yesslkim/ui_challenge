import './RotateArrow.css';

type RotateArrowProps = {
  isActive: boolean;
};

const RotateArrow = ({ isActive }: RotateArrowProps) => {
  return (
    <i
      className={isActive ? 'ic-chevron-right active' : 'ic-chevron-right'}
    ></i>
  );
};

export default RotateArrow;
