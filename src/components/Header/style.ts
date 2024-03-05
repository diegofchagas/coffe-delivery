import styled, {css} from 'styled-components';

export const HeaderContainer = styled.header`
background-color:${({theme})=> theme['base-background']};
padding:2rem;
display:flex;
justify-content:space-between;
`;

export const NavContainer = styled.div`
  display:flex;
  align-items:center;
  gap:0.75rem;
`;


interface HeaderButtonProps {
  variant: "purple" | "yellow";
}

export const HeaderButton = styled.button<HeaderButtonProps>`
border:none;
border-radius:6px;
padding: 0 0.5rem;
min-width:2.3rem;
height:2.3rem;
display:flex;
align-items:center;
justify-content:center;
gap:4px;
cursor: pointer;

${({ variant }) => css`
    background: ${({ theme }) => theme[`${variant}-light`]};
    color: ${({ theme }) => theme[`${variant}-dark`]};
  `}

  ${({ variant }) =>
    variant === "purple" &&
    css`
      svg {
        color: ${({ theme }) => theme[`${variant}`]};
      }
    `}

`;