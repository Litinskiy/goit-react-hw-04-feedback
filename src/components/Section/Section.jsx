import PropTypes from 'prop-types';
import { SectionStyled } from "../Section/Section.styled"

export function Section({ title, children }) {
  return (
    <SectionStyled>
      <h2>{title}</h2>
      {children}
    </SectionStyled>
  );
}

Section.prototypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
