import styled, {css} from 'styled-components';

export const HeaderContainer = styled.header`
background-color:${({theme})=> theme['base-background']};
padding:2rem;
display:flex;
justify-content:space-between;
position:sticky;
inset:0;
z-index:10;
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
position: relative;

span{
  position: absolute;
  width:1.25rem;
  height:1.25rem;
  border-radius:50%;
  background-color:${({theme})=> theme['yellow-dark']};
  color:${({theme})=> theme.white};
  top:calc(-1.25rem / 2);
  right:calc(-1.25rem / 2);
  text-align:center;
  font-size:.75rem;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.72px;

  display:flex;
  align-items:center;
  justify-content:center;
}

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