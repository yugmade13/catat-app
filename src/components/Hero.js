import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';

const SectionHero = styled.div`
  background: rgb(255, 192, 23);
  
  div {
    width: 100%;
    max-width: 800px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 72px 24px;
  }
  
  h2 {
    font-weight: 600;
    font-family: 'Source Serif Pro', sans-serif;
    font-size: 85px;
    margin-bottom: 24px;
  }
  
  p {
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    margin-bottom: 24px;
  }
  
  .button {
    padding: 8px 32px;
    font-size: 24px;
    display: inline-block;
  }
`;

function Hero() {
  const { locale } = React.useContext(LocaleContext);

  return (
    <SectionHero>
      <div>
        <h2>
          {locale === 'id'
            ? (
              <span>
                Catat
                <br />
                Aja Dulu!
              </span>
            )
            : (
              <span>
                Just
                <br />
                A Note!
              </span>
            )}
        </h2>
        <p>
          {locale === 'id'
            ? (
              <span>
                Catat adalah menuliskan sesuatu untuk peringatan (dalam buku catatan)
                <br />
                {' '}
                contoh: ia mencatat semua kegiatan anak buahnya
              </span>
            )
            : (
              <span>
                Note is to write something for a warning (in a notebook)
                <br />
                example: he records all the activities of his men
              </span>
            )}
        </p>
        <Link className="button" to="/register">{locale === 'id' ? 'Daftar Sekarang' : 'Get Started'}</Link>
      </div>
    </SectionHero>
  );
}

export default Hero;
