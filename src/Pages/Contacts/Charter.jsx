import style from "./Charter.module.scss";
import { useRef, useState } from "react";
import common from "../../Common/Charter/common.json";
import goals from "../../Common/Charter/goals.json";
import tasks from "../../Common/Charter/tasks.json";
import activities from "../../Common/Charter/activities.json";
import possibilities from "../../Common/Charter/possibilities.json";
import exclusiveRights from "../../Common/Charter/exclusiveRights.json";
import liabilities from "../../Common/Charter/liabilities.json";
import rights from "../../Common/Charter/rights.json";
import membersLiabilities from "../../Common/Charter/membersLiabilities.json";
import membersRights from "../../Common/Charter/membersRights.json";
import membershipEnd from "../../Common/Charter/membershipEnd.json";
import govenance from "../../Common/Charter/govenance.json";
import chairman from "../../Common/Charter/chairman.json";
import sources from "../../Common/Charter/sources.json";
import reorganisation from "../../Common/Charter/reorganisation.json";

export default function Charter({ isOpen }) {
  const [isCommonOpen, setIsCommonOpen] = useState(false);
  const [isGoalsOpen, setIsGoalsOpen] = useState(false);
  const [isRightsOpen, setIsRightsOpen] = useState(false);
  const [isMembersOpen, setIsMembersOpen] = useState(false);
  const [isControlsOpen, setIsControlsOpen] = useState(false);
  const [isPropetyOpen, setIsPropetyOpen] = useState(false);
  const [isReorganisationOpen, setIsReorganisationOpen] = useState(false);
  const [isChangesOpen, setIsChangesOpen] = useState(false);
  const [isFinalOpen, setIsFinalOpen] = useState(false);
  const ref = useRef(null);
  const onHandleClose = () => {
    isOpen(false);
  };
  const onHandleUp = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const onHandleCommon = () => {
    setIsCommonOpen(!isCommonOpen);
  };
  const onHandleGoals = () => {
    setIsGoalsOpen(!isGoalsOpen);
  };
  const onHandleRights = () => {
    setIsRightsOpen(!isRightsOpen);
  };
  const onHandleMembers = () => {
    setIsMembersOpen(!isMembersOpen);
  };
  const onHandleControls = () => {
    setIsControlsOpen(!isControlsOpen);
  };
  const onHandlePropety = () => {
    setIsPropetyOpen(!isPropetyOpen);
  };
  const onHandleReorganisation = () => {
    setIsReorganisationOpen(!isReorganisationOpen);
  };
  const onHandleChanges = () => {
    setIsChangesOpen(!isChangesOpen);
  };
  const onHandleFinal = () => {
    setIsFinalOpen(!isFinalOpen);
  };
  return (
    <section>
      <div className={style.document}>
        <div className={style.titul} ref={ref}>
          <div className={style.header}>
            <div className={style.header__first}>
              <button className={style.close_button} onClick={onHandleClose}>
                Закрыть
              </button>
              <p className={style.header__text}>УТВЕРЖДЕН</p>
            </div>
            <div className={style.header__textblock}>
              <p className={style.header__text_item}>
                Учредительным собранием общественной организации
              </p>
              <p className={style.header__text_item}>
                «Местная национально-культурная автономия татар» г.Прокопьевск
              </p>
              <p className={style.header__text_item}>Протокол №1 от. 28.04.2024г.</p>
            </div>
          </div>
          <div className={style.main__textblock}>
            <p className={style.main__title}>УСТАВ</p>
            <p className={style.main__text}>
              Общественная организация «Местная национально-культурная aвтономия
              татар» г. Прокопьевск
            </p>
          </div>
          <div className={style.footer__textblock}>
            <p className={style.text}>г. Прокопьевск 2024г.</p>
          </div>
        </div>
        <div className={style.chapter}>
          <button className={style.chapter__button} onClick={onHandleCommon}>
            1. Общие положения
          </button>
          {isCommonOpen && (
            <ol>
              {common.map((item) => (
                <li key={item.id} className={style.chapter__numberitem}>
                  <p className={style.text}>{item.text}</p>
                </li>
              ))}
            </ol>
          )}
        </div>
        <div className={style.chapter}>
          <button className={style.chapter__button} onClick={onHandleGoals}>
            2. Цели и задачи автономии
          </button>
          {isGoalsOpen && (
            <ol>
              <li className={style.chapter__numberitem}>
                Основными целями Автономии являются:
                <ul>
                  {goals.map((item) => (
                    <li key={item.id} className={style.chapter__item}>
                      <p className={style.text}>{item.text}</p>
                    </li>
                  ))}
                </ul>
              </li>
              <li className={style.chapter__numberitem}>
                Для выполнения своих целей Автономия ставит перед собой
                следующие задачи:
                <ul>
                  {tasks.map((item) => (
                    <li key={item.id} className={style.chapter__item}>
                      <p className={style.text}>{item.text}</p>
                    </li>
                  ))}
                </ul>
              </li>
              <li className={style.chapter__numberitem}>
                Основные виды деятельности Автономии:
                <ul>
                  {activities.map((item) => (
                    <li key={item.id} className={style.chapter__item}>
                      <p className={style.text}>{item.text}</p>
                    </li>
                  ))}
                </ul>
              </li>
              <li className={style.chapter__numberitem}>
                В целях обеспечения права на сохранение и развитие национальной
                татарской культуры и традиций Автономия вправe:
                <ul>
                  {possibilities.map((item) => (
                    <li key={item.id} className={style.chapter__item}>
                      <p className={style.text}>{item.text}</p>
                    </li>
                  ))}
                </ul>
              </li>
            </ol>
          )}
        </div>
        <div className={style.chapter}>
          <button className={style.chapter__button} onClick={onHandleRights}>
            3. Права и обязанности Автономии
          </button>
          {isRightsOpen && (
            <ol>
              <li className={style.chapter__numberitem}>
                Автономия в установленном действующим законодательством порядке
                имеет право:
                <ul>
                  {rights.map((item) => (
                    <li key={item.id} className={style.chapter__item}>
                      <p className={style.text}>{item.text}</p>
                    </li>
                  ))}
                </ul>
              </li>
              <li className={style.chapter__numberitem}>
                Право на национально-культурнуюю автономию не является правом на
                национально-территориальное самоопределение. Осуществление
                права на татарскую национально-культурную автономию не должно
                наносить ущерб интересам других этнических общностей Кемеровской
                области.
              </li>
              <li className={style.chapter__numberitem}>
                Автономия обязана:
                <ul>
                  {liabilities.map((item) => (
                    <li key={item.id} className={style.chapter__item}>
                      <p className={style.text}>{item.text}</p>
                    </li>
                  ))}
                </ul>
              </li>
            </ol>
          )}
        </div>
        <div className={style.chapter}>
          <button className={style.chapter__button} onClick={onHandleMembers}>
            4. Права и обязанности членов Автономии
          </button>
          {isMembersOpen && (
            <ol>
              <li className={style.chapter__numberitem}>
                Членами Автономии могут быть граждане Российской Федерации,
                физические лица, достигшие 18 лет, а также юридические лица
                -общественные объединения, относящие себя к татарской этнической
                общности, постоянно проживающие на территории Российской
                Федерации и признающие Устав Автономии, способствующие своей
                деятельностью осуществлению целей Автономии. Члены Автономии
                имеют равные права и равные обязанности.
              </li>
              <li className={style.chapter__numberitem}>
                Членство в Автономии осуществляется на добровольных началах.
                Приём в члены Автономии производится в индивидуальном порядке,
                на основании письменного заявления физического лица и решения
                уполномоченного руководящего органа юридического лица, поданного
                в Правление Автономии. Правление Автономии на заседании выносит
                решение о принятии заявителя в члены Автономии или обоснованное
                решение об отказе в приёме. Заявитель становится Членом
                Автономии с момента принятия положительного решения Правления
                Автономии.
              </li>
              <li className={style.chapter__numberitem}>
                Члены Автономии имеют право:
                <ul>
                  {membersRights.map((item) => (
                    <li key={item.id} className={style.chapter__item}>
                      <p className={style.text}>{item.text}</p>
                    </li>
                  ))}
                </ul>
              </li>
              <li className={style.chapter__numberitem}>
                Члены Автономии обязаны:
                <ul>
                  {membersLiabilities.map((item) => (
                    <li key={item.id} className={style.chapter__item}>
                      <p className={style.text}>{item.text}</p>
                    </li>
                  ))}
                </ul>
              </li>
              <li className={style.chapter__numberitem}>
                Членство в Автономии прекращается:
                <ul>
                  {membershipEnd.map((item) => (
                    <li key={item.id} className={style.chapter__item}>
                      <p className={style.text}>{item.text}</p>
                    </li>
                  ))}
                </ul>
              </li>
              <li className={style.chapter__numberitem}>
                Вступительный взнос уплачивается после принятия решения о
                вступлении в Автономию в размере и порядке, установленным Общим
                собранием. Членские взносы уплачиваются ежегодно в размере и
                порядке, установленным решением Общего собрания.
              </li>
              <li className={style.chapter__numberitem}>
                Члены могут в любое время выйти из ее состава путем подачи
                заявления (решения) в Правление Автономии. При этом они обязаны
                выполнить все текущие договорные обязательства перед Автономией.
              </li>
              <li className={style.chapter__numberitem}>
                Член считается выбывшим из состава Автономии с момента подачи
                заявления (решения) в Правление Автономии. При выходе из
                Автономии вступительные и членские взносы не возвращаются.
              </li>
              <li className={style.chapter__numberitem}>
                Решение об исключении из членов Автономии и прекращении членства
                принимается Правлением Автономии. Решение считается принятым,
                если за него проголосовало большинство голосов членов Правления,
                присутствующих на заседании, при наличии кворума.
              </li>
            </ol>
          )}
        </div>
        <div className={style.chapter}>
          <button className={style.chapter__button} onClick={onHandleControls}>
            5. Руководящие и контрольно-ревизионный органы
          </button>
          {isControlsOpen && (
            <ol>
              <li className={style.chapter__numberitem}>
                Органами управления Автономии являются:
                <ul>
                  <li className={style.chapter__item}>
                    Общее собрание Автономии;
                  </li>
                  <li className={style.chapter__item}>Правление Автономии;</li>
                  <li className={style.chapter__item}>
                    Председатель Правления;
                  </li>
                  <li className={style.chapter__item}>Ревизор.</li>
                </ul>
              </li>
              <li className={style.chapter__numberitem}>
                Высшим органом управления Автономии является Общее собрание
                членов Автономии (далее Общее собрание), созываемое не реже
                одного раза в год.
              </li>
              <li className={style.chapter__numberitem}>
                Внеочередное Общее собрание может быть созвано по требованию не
                менее чем одной трети членов Автономии или по решению Правления
                Автономии.
              </li>
              <li className={style.chapter__numberitem}>
                Общее собрание может быть созвано по требованию более половины
                членов Правления Автономии, а также по требованию Председателя
                Правления, Ревизора или не менее одной трети членов Автономии.
                Правление Автономии информирует членов Автономии о сроках, месте
                проведения и повестке дня Общего собрания.
              </li>
              <li className={style.chapter__numberitem}>
                Предложение о созыве внеочередного Общего собрания направляется
                в письменной форме в Правление Автономии с указанием вопросов,
                подлежащих рассмотрению и ориентировочной даты его проведения с
                учётом времени, необходимого для подготовки Общего собрания, не
                позднее чем за 30 дней до ориентировочной даты проведения
                внеочередного Общего собрания. Решение о созыве Общего собрания
                принимается Правлением Автономии в течение 15 дней с момента
                поступления соответствующего предложения. Члены Автономии
                уведомляются о созыве Общего собрания с указанием проекта
                повестки, а также места и времени проведения Общего собрания не
                позднее, чем за 15 дней до дня его проведения.
              </li>
              <li className={style.chapter__numberitem}>
                Каждый член Автономии имеет один голос.
              </li>
              <li className={style.chapter__numberitem}>
                В работе Общего собрания могут принимать участие приглашенные
                физические лица и представители юридических лиц, которые имеют
                право выступать на Общем собрании по вопросам повестки дня, но
                не обладают правом голоса.
              </li>
              <li className={style.chapter__numberitem}>
                Общее собрание правомочно при присутствии более половины членов
                Автономии.
              </li>
              <li className={style.chapter__numberitem}>
                К исключительной компетенции Общего собрания относится:
                <ul>
                  {exclusiveRights.map((item) => (
                    <li key={item.id} className={style.chapter__item}>
                      <p className={style.text}>{item.text}</p>
                    </li>
                  ))}
                </ul>
              </li>
              <li className={style.chapter__numberitem}>
                Решения по вопросам исключительной компетенции Общего собрания
                принимаются квалифицированным большинством (2/3) голосов
                присутствующих.
              </li>
              <li className={style.chapter__numberitem}>
                Общее собрание вправе на своем заседании рассмотреть любой иной
                вопрос деятельности Автономии и, если это противоречит Уставу,
                принять по нему решение, обязательное для руководящих органов
                Автономии и членов Автономии. Решения принимаются большинством
                голосов членов, присутствующих на Общем собрании.
              </li>
              <li className={style.chapter__numberitem}>
                Все решения, принимаемые Общим собранием, являются обязательными
                для исполнения Правлением Автономии, Председателем Правления,
                Ревизором и ее членами.
              </li>
              <li className={style.chapter__numberitem}>
                Для практического текущего руководства деятельностью Автономией
                в период между созывами Общих собраний избирается сроком на 5
                лет постоянно действующий руководящий орган Автономии -
                Правление Автономии (далее -Правление).
              </li>
              <li className={style.chapter__numberitem}>
                Заседание Правления проводятся по мере необходимости, но не реже
                двух раз в год. Заседания считаются правомочными при наличии на
                заседании более половины членов Правления. Решения Правления
                считаются принятыми, если за них проголосовало большинство
                голосов членов Правления. Решения принимаются открытым
                голосованием.
              </li>
              <li className={style.chapter__numberitem}>
                К компетенции Правления относятся следующие вопросы:
                <ul>
                  {govenance.map((item) => (
                    <li key={item.id} className={style.chapter__item}>
                      <p className={style.text}>{item.text}</p>
                    </li>
                  ))}
                </ul>
              </li>
              <li className={style.chapter__numberitem}>
                Лицом, имеющим право действовать без доверенности, является
                Председатель Правления.
              </li>
              <li className={style.chapter__numberitem}>
                Председатель Правления избирается из числа членов Правления на
                Общем собрании сроком на 5 лет. Кандидатура действующего
                Председателя Правления может выдвигаться для избрания на новый
                срок без каких-либо ограничений.
              </li>
              <li className={style.chapter__numberitem}>
                Избранным считается кандидат, набравший 2/3 голосов,
                присутствующих на Общем собрании, при наличии кворума.
              </li>
              <li className={style.chapter__numberitem}>
                Компетенция Председателя Правления:
                <ul>
                  {chairman.map((item) => (
                    <li key={item.id} className={style.chapter__item}>
                      <p className={style.text}>{item.text}</p>
                    </li>
                  ))}
                </ul>
              </li>
              <li className={style.chapter__numberitem}>
                Контрольно-ревизионнымм органом Автономии является Ревизор,
                избираемый Общим собранием сроком на 5 лет.
              </li>
              <li className={style.chapter__numberitem}>
                Ревизор проводит ревизию, а также проверку
                финансово-хозяйственнойй деятельности Автономии не реже одного
                раза в год.
              </li>
              <li className={style.chapter__numberitem}>
                Ревизор для выполнения проверок может привлекать независимых
                специалистов и экспертов.
              </li>
              <li className={style.chapter__numberitem}>
                Ревизор Автономии подотчетен Общему собранию.
              </li>
              <li className={style.chapter__numberitem}>
                Ревизор может участвовать в заседаниях Правления с правом
                совещательного голоса.
              </li>
              <li className={style.chapter__numberitem}>
                Ревизор не может входить в состав Правления.
              </li>
              <li className={style.chapter__numberitem}>
                Ревизор вправе требовать от должностныхх лиц организациии
                предоставления всех необходимых документов и личных объяснений.
              </li>
              <li className={style.chapter__numberitem}>
                Ревизор один раз в год представляет результаты проверок Общему
                собранию после обсуждения их на заседании Правления. Общее
                собрание утверждает или отклоняет заключение Ревизора.
              </li>
            </ol>
          )}
        </div>
        <div className={style.chapter}>
          <button className={style.chapter__button} onClick={onHandlePropety}>
            6. Имущество и средства Автономии
          </button>
          {isPropetyOpen && (
            <ol>
              <li className={style.chapter__numberitem}>
                В собственности Автономии могут также находиться учреждения,
                издательства, средства массовой информации, создаваемые и
                приобретаемые за счет средств Автономии в соответствии с ее
                уставными целями.
              </li>
              <li className={style.chapter__numberitem}>
                Автономия может осуществлять предпринимательскую деятельность
                лишь постольку, поскольку это служит достижению уставных целей,
                ради которых она создана, и соответствующую этим целям. Такой
                деятельностью признаются приносящее прибыль производство товаров
                и услуг (видео и аудио материалы, организация культурно-массовых
                мероприятий и т.п.), отвечающих целям создания Автономии, а
                также приобретение и реализация ценных бумаг, участие в
                хозяйственных обществах и участие в товариществах на вере в
                качестве вкладчика.
              </li>
              <li className={style.chapter__numberitem}>
                Автономия может создавать хозяйственные товарищества, общества и
                иные хозяйственные организации, а также приобретать имущество,
                предназначенное для ведения предпринимательской деятельности.
                Создаваемые Автономией хозяйственные товарищества, общества и
                иные хозяйственные организации вносят в соответствующие бюджеты
                платежи в порядке и размерах, установленных законодательством
                РФ.
              </li>
              <li className={style.chapter__numberitem}>
                Доходы от предпринимательской деятельности Автономии не могут
                перераспределяться между членами Автономии и должны
                использоваться только для достижения уставных целей. Допускается
                использование Автономией своих средств на благотворительные
                цели.
              </li>
              <li className={style.chapter__numberitem}>
                Член Автономии не отвечает по обязательствам Автономии, а
                Автономия не отвечает по обязательствам своих членов.
              </li>
              <li className={style.chapter__numberitem}>
                Каждый отдельный член общества не имеет права собственности на
                долю имущества, принадлежащего Автономии.
              </li>
              <li className={style.chapter__numberitem}>
                Автономия может совершать в отношении находящегося в ее
                собственности имущества любые сделки, не противоречащие
                законодательству Российской Федерации, настоящему Уставу и
                соответствующие уставным целям Автономии.
              </li>
              <li className={style.chapter__numberitem}>
                Источниками формирования имущества Автономии являются:
                <ul>
                  {sources.map((item) => (
                    <li key={item.id} className={style.chapter__item}>
                      <p className={style.text}>{item.text}</p>
                    </li>
                  ))}
                </ul>
              </li>
              <li className={style.chapter__numberitem}>
                Автономия должна иметь достаточное для осуществления приносящей
                доход деятельности имущество рыночной стоимостью не менее
                минимального размера уставного капитала, предусмотренного для
                общества с ограниченной ответственностью.
              </li>
            </ol>
          )}
        </div>
        <div className={style.chapter}>
          <button
            className={style.chapter__button}
            onClick={onHandleReorganisation}
          >
            7. Реорганизация и ликвидация организации
          </button>
          {isReorganisationOpen && (
            <ol>
              {reorganisation.map((item) => (
                <li key={item.id} className={style.chapter__numberitem}>
                  <p className={style.text}>{item.text}</p>
                </li>
              ))}
            </ol>
          )}
        </div>
        <div className={style.chapter}>
          <button className={style.chapter__button} onClick={onHandleChanges}>
            8. Порядок внесения изменений и дополнений в Устав Автономии
          </button>
          {isChangesOpen && (
            <ol>
              <li className={style.chapter__numberitem}>
                Изменения и дополнения в Устав, утвержденные Общим собранием
                квалифицированным большинством (2/3) голосов присутствующих при
                наличии кворума, подлежат государственной регистрации.
              </li>
              <li className={style.chapter__numberitem}>
                Государственная регистрация изменений и дополнений в Устав
                Автономии осуществляется в порядке, установленном действующим
                законодательством Российской Федерации.
              </li>
              <li className={style.chapter__numberitem}>
                Изменения и дополнения в Устав Автономии вступают в силу с
                момента их государственной регистрации.
              </li>
            </ol>
          )}
        </div>
        <div className={style.chapter}>
          <button className={style.chapter__button} onClick={onHandleFinal}>
            9. Заключительные положения
          </button>
          {isFinalOpen && (
            <ol>
              <li className={style.chapter__numberitem}>
                Автономия обязана вести бухгалтерский учет и представлять в
                заинтересованные органы финансовую отчетность в порядке,
                установленном законодательством Российской Федерации.
              </li>
              <li className={style.chapter__numberitem}>
                Отношения Автономии с ее работниками регулируется
                законодательством Российской Федерации о труде и занятости с
                работниками - трудовыми договорами (контрактами).
              </li>
            </ol>
          )}
        </div>
        <div className={style.footer__buttons}>
          <button className={style.close_button} onClick={onHandleUp}>
            В начало
          </button>
          <button className={style.close_button} onClick={onHandleClose}>
            Закрыть
          </button>
        </div>
      </div>
    </section>
  );
}
