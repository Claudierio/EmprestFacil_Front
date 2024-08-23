"use client";

import React from "react";
import styles from "./about.module.scss";
import image1 from "../../../public/bannerSite.webp";
import image2 from "../../../public/bannersite2.webp";
import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";

export default function AboutUs() {
  const accordionStyle = {
    backgroundColor: "#1a1a29",
    color: "#A59d92",
    marginBottom: 2,
    border: "1px solid rgba(178, 172, 162, 0.473)",
    borderRadius: "8px",
    overflow: "hidden",
    '&:hover': {
      boxShadow: 'rgba(0, 0, 0, 0.3) 0px 5px 15px',
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.text}>
          <h1>Sobre Nós</h1>
          <p> O <span className={styles.textSpan}> A.G.I.O.T.A. (Aplicativo Gestor de Informações e Organização de
            Transações de Adiantamentos)</span> é uma ferramenta inovadora e completa para a gestão de empréstimos
            pessoais, criada com o objetivo de facilitar o controle, a
            organização e o acompanhamento das finanças dos nossos usuários. Com
            uma interface intuitiva e funcional, o aplicativo oferece diversas
            funcionalidades que garantem uma administração eficiente e prática
            dos adiantamentos pessoais.
          </p>
        </div>
        <div className={styles.image}>
          <Image src={image1} alt="Sobre nós" />
        </div>
      </div>

      <div className={`${styles.section} ${styles.reverse}`}>
        <div className={styles.text}>
          <h2>Nosso Objetivo</h2>
          <p>
            Nosso principal objetivo é desenvolver um aplicativo que permita aos
            usuários administrar com eficiência e praticidade todos os aspectos
            relacionados a empréstimos pessoais, proporcionando uma experiência
            de uso agradável e segura.
          </p>
        </div>
        <div className={styles.image}>
          <Image src={image2} alt="Nosso Objetivo" />
        </div>
      </div>

      <div className={styles.content}>
        <h2>Funcionalidades Principais</h2>
        <Accordion sx={accordionStyle} className={styles.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "rgb(178, 172, 162)" }} />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography sx={{ fontWeight: "800" }}>Gestão de Adiantamentos</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="div">
              <ul className={styles.list}>
                <li>
                  Armazenar e organizar informações dos adiantamentos pessoais.
                </li>
                <Divider sx={{ my: 1 }} />
                <li>
                  Registrar dados como valor do adiantamento, taxa de juros,
                  datas de vencimento e parcelas.
                </li>
                <Divider sx={{ my: 1 }} />
                <li>
                  Criar listas de transações relacionadas aos adiantamentos.
                </li>
                <Divider sx={{ my: 1 }} />
                <li>Acompanhar o progresso de cada transação.</li>
                <Divider sx={{ my: 1 }} />
                <li>
                  Atualizar valores das dívidas, de acordo com a taxa de juros.
                </li>
                <Divider sx={{ my: 1 }} />
                <li>Permitir pagamentos totais ou parciais.</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={accordionStyle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "rgb(178, 172, 162)" }} />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography sx={{ fontWeight: "800" }}>Organização</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="div">
              <ul className={styles.list}>
                <li>Planejar pagamentos e controlar prazos.</li>
                <Divider sx={{ my: 1 }} />
                <li>
                  Receber notificações e lembretes sobre datas importantes.
                </li>
                <Divider sx={{ my: 1 }} />
                <li>Buscar agiotas com melhores taxas de juros.</li>
                <Divider sx={{ my: 1 }} />
                <li>Permitir avaliar a reputação do agiota e do cliente.</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={accordionStyle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "rgb(178, 172, 162)" }} />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography sx={{ fontWeight: "800" }}>Análises e Relatórios</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="div">
              <ul className={styles.list}>
                <li>Gerar relatórios detalhados sobre os adiantamentos.</li>
                <Divider sx={{ my: 1 }} />
                <li>Visualizar gráficos e estatísticas financeiras.</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={accordionStyle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "rgb(178, 172, 162)" }} />}
            aria-controls="panel4-content"
            id="panel4-header"
          >
            <Typography sx={{ fontWeight: "800" }}>Histórico de Transações</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="div">
              <ul className={styles.list}>
                <li>
                  Manter um registro detalhado de pagamentos realizados e
                  valores devidos.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={accordionStyle}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "rgb(178, 172, 162)" }} />}
            aria-controls="panel5-content"
            id="panel5-header"
          >
            <Typography sx={{ fontWeight: "800" }}>Segurança</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="div">
              <ul className={styles.list}>
                <li>Garantir a proteção dos dados sensíveis.</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className={styles.content}>
        <h2>Nosso Compromisso</h2>
        <p>
          Estamos comprometidos em oferecer uma solução financeira com ética,
          qualidade e transparência para nossos usuários, proporcionando um
          relacionamento duradouro e de confiança. Nossa missão é tornar a
          gestão de adiantamentos uma tarefa simples e segura, ajudando nossos
          usuários a alcançar suas metas financeiras com tranquilidade.
        </p>
      </div>

    </div>
  );
}
