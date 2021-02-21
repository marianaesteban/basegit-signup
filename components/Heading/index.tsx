import { StyledHeading } from './styles';

export interface IHeading extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading = ({ level = 1, children, ...props }: IHeading) => {
  return (
    <StyledHeading level={level} {...props}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
