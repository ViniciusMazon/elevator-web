import styled, { keyframes, css } from 'styled-components';
import {
  Briefcase,
  Award,
  User,
  LogOut,
  Menu,
  Close,
} from '../../styles/Icons';

export const Container = styled.nav`
  width: 70px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--dark-gray);

  @media (max-width: 900px) {
    width: 100%;
    height: 100vh;
    background: transparent;

    justify-content: flex-start;

    position: fixed;
    top: 0;
    left: 0;
  }
`;

const neon = keyframes`
 from {
    filter: drop-shadow(0 0 0 var(--neon));
  }
  to {
    filter: drop-shadow(0 0 15px var(--neon));
  }
`;

export const MenuIcon = styled(Menu)`
  height: 40px;
  width: 40px;
  stroke: var(--white);

  cursor: pointer;

  @media (min-width: 900px) {
    visibility: hidden;
  }
`;

export const MenuIconClose = styled(Close)`
  height: 40px;
  width: 40px;
  fill: var(--white);

  cursor: pointer;

  @media (min-width: 900px) {
    visibility: hidden;
  }
`;

export const Header = styled.header`
  height: 84px;
  width: 100%;
  display: flex;
  align-items: center;

  > img {
    height: 40px;
    margin-left: 15px;
    animation: ${neon} 2.5s alternate infinite ease-in-out;

    @media (max-width: 900px) {
      margin: 0;
    }
  }

  @media (max-width: 900px) {
    width: 100%;
    height: 70px;
    padding: 0 20px;
    justify-content: space-between;
    background: var(--dark-gray);
  }
`;

export const Options = styled.div`
  height: 230px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px) {
    height: fit-content;
    background: var(--dark-gray-transparency);
    align-items: flex-start;
    padding: 0 20px;
  }
`;

export const Option = styled.div`
  display: flex;
  width: 30px;
  height: 30px;

  @media (max-width: 900px) {
    margin-top: 40px;
    width: fit-content;
  }
`;

export const OptionLabel = styled.p`
  font-size: 2.5rem;
  font-weight: 500;
  color: var(--light-green);
  padding-left: 13px;

  @media (min-width: 900px) {
    visibility: hidden;
  }
`;

export const OptionLabelActive = styled.p`
  font-size: 2.5rem;
  font-weight: 500;
  color: var(--neon);
  padding-left: 13px;

  @media (min-width: 900px) {
    visibility: hidden;
  }
`;

export const Footer = styled.div`
  height: 84px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    height: 66%;
    background: var(--dark-gray-transparency);
    justify-content: flex-start;
    align-items: flex-end;
    padding: 0 20px 40px 20px;
  }
`;

const iconStyle = css`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  stroke: var(--light-green);
  stroke-width: 1px;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    stroke-width: 2px;
    stroke: var(--neon);
  }
`;

const iconStyleActive = css`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  stroke: var(--neon);
  stroke-width: 2px;

  cursor: pointer;
`;

export const OpportunitiesIcon = styled(Briefcase)`
  ${iconStyle}
`;
export const MyOpportunitiesIcon = styled(Award)`
  ${iconStyle}
`;
export const ProfileIcon = styled(User)`
  ${iconStyle}
`;
export const OpportunitiesIconActive = styled(Briefcase)`
  ${iconStyleActive}
`;
export const MyOpportunitiesIconActive = styled(Award)`
  ${iconStyleActive}
`;
export const ProfileIconActive = styled(User)`
  ${iconStyleActive}
`;
export const SignOutIcon = styled(LogOut)`
  ${iconStyle}
`;
