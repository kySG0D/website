import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-regras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './regras.component.html',
  styleUrl: './regras.component.scss'
})
export class RegrasComponent {
  imgURL = "../../assets/bg/regras-img.png";
  regras : {title:string, text:string}[] = [
    {
      title:"Respeito e Comportamento", 
      text:"Trate todos os jogadores com respeito.<br><br>Comportamentos tóxicos, bullying, discriminação ou assédio não serão tolerados."
    },
    {
      title:"Roleplay (RP) de Qualidade", 
      text:"Mantenha sempre o RP. Evite sair do personagem (Out of Character - OOC) enquanto estiver no servidor."
    },
    {
      title:"Proibição de Meta Gaming", 
      text:"Não utilize informações obtidas fora do jogo (por exemplo, via streams ou Discord) para vantagem no jogo.<br><br>Mantenha o conhecimento do seu personagem restrito ao que ele sabe dentro do jogo."
    },
    {
      title:"Uso de Veículos e Armas", 
      text:"Utilize veículos e armas de maneira realista. Evite comportamentos irresponsáveis ou abusivos."
    },
    {
      title:"Proibição de RDM (Random Deathmatch) e VDM (Vehicle Deathmatch)", 
      text:"Não mate outros jogadores sem um motivo claro e justificado dentro do RP.<br><br>Não utilize veículos para atropelar outros jogadores de forma injustificada."
    },
    {
      title:"Exploração de Bugs e Glitches", 
      text:"É proibido explorar qualquer bug ou glitch para obter vantagens.<br><br>Reporte qualquer bug encontrado aos administradores do servidor."
    },
    {
      title:"Comunicação", 
      text:"Utilize os canais apropriados para comunicação fora do personagem.<br><br>Evite spam e mantenha a comunicação clara e relevante."
    },
    {
      title:"Criação de Personagens", 
      text:"Crie personagens com histórias de fundo detalhadas e coerentes."
    },
    {
      title:"Gestão de Propriedades", 
      text:"A posse e uso de propriedades (casas, empresas, etc.) devem ser realizadas de forma realista.<br><br>Qualquer transação de propriedades deve ser documentada e comunicada aos administradores, se necessário."
    },
    {
      title:"Uso de Microfone", 
      text:"É altamente recomendado o uso de microfone para uma experiência de RP mais imersiva.<br><br>Mantenha a comunicação clara e evite ruídos de fundo."
    },
    {
      title:"RP de Ferimentos e Consequências", 
      text:"Roleplay de ferimentos deve ser realista. Personagens não devem se recuperar de ferimentos graves instantaneamente.<br><br>Respeite as consequências das ações do seu personagem, incluindo prisão, hospitalização, etc."
    },
    {
      title:"Uso de Veículos de Emergência e Governamentais", 
      text:"Veículos de emergência (polícia, ambulância, bombeiros) e governamentais devem ser usados apenas por jogadores autorizados.<br><br>Abuso ou roubo desses veículos é estritamente proibido."
    },
    {
      title:"Limitações de Personagem", 
      text:"Cada jogador pode ter um número limitado de personagens ativos, conforme estabelecido pelo servidor.<br><br>Personagens inativos ou abandonados devem ser comunicados aos administradores, se necessário."
    },
    {
      title:"Proteção de Dados Pessoais", 
      text:"Respeite a privacidade dos outros jogadores. Não compartilhe informações pessoais sem consentimento."
    },
    {
      title:"Comportamento Fora do Jogo", 
      text:"O comportamento fora do servidor (em redes sociais, Discord, etc.) também deve ser respeitoso e apropriado.<br><br>Ações fora do jogo que afetem negativamente a comunidade do servidor podem resultar em punições."
    },
    {
      title:"Banimento e Punições", 
      text:"Infrações das regras serão tratadas com seriedade e podem resultar em advertências, suspensões temporárias ou banimento permanente.<br><br>Respeite as decisões dos administradores e evite discussões acaloradas sobre punições."
    },
    {
      title:"Feedback e Sugestões", 
      text:"Feedback construtivo sobre o servidor é bem-vindo e pode ser enviado através dos canais apropriados.<br><br>Sugestões para melhorias também são encorajadas e serão consideradas pela equipe de administração."
    },
  ]
}
