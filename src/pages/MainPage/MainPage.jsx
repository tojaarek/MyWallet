import { Helmet } from 'react-helmet';
import { Main, Aside, Section } from './MainPage.styled';
import Nav from '../../components/Nav/Nav';
import Balance from '../../components/Balance/Balance';
import TransactionsList from '../../components/TransactionsList/TransactionsList';
import ButtonOptions from '../../components/ButtonOptions/ButtonOptions';
import Modal from '../../components/Modal/Modal';
import {
  selectNavIsModalOpen,
  selectNavIsOptionsOpen,
} from '../../redux/selectors/nav.selectors';
import { useSelector } from 'react-redux';
import Options from '../../components/Options/Options';
import { useRef } from 'react';

const MainPage = () => {
  const isModalOpen = useSelector(selectNavIsModalOpen);
  const isOptionsOpen = useSelector(selectNavIsOptionsOpen);
  const buttonRef = useRef(null);

  return (
    <>
      <Helmet>
        <title>MyWallet - FinanceApp | Dashboard </title>
      </Helmet>
      <Main>
        {isModalOpen ? (
          <Modal />
        ) : (
          <>
            <Aside>
              <Nav />
              <Balance />
            </Aside>
            <Section>
              <TransactionsList />
            </Section>
            {isOptionsOpen && <Options buttonRef={buttonRef} />}
            <ButtonOptions buttonRef={buttonRef} />
          </>
        )}
      </Main>
    </>
  );
};
export default MainPage;
