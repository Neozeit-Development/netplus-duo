import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/Button";
import { Caption } from "@/components/Caption";
import { ZoneRow } from "@/components/ZoneRow";
import studyContent from "@/data/study_content.json";
import type { StudyDomain } from "@/types";
import styles from "./StudyScreen.module.css";

const STUDY = studyContent as StudyDomain[];

function StudyDomainNav({ activeZone }: { activeZone?: number }) {
  return (
    <nav className={styles.domainNav} aria-label="Domains">
      {STUDY.map((d) => (
        <NavLink
          key={d.zone}
          to={`/study/${d.zone}`}
          className={({ isActive }) =>
            `${styles.domainNavLink} ${isActive || activeZone === d.zone ? styles.domainNavActive : ""}`
          }
        >
          <span className={styles.domainNavNum}>{String(d.zone).padStart(2, "0")}</span>
          <span className={styles.domainNavLabel}>{d.domain}</span>
        </NavLink>
      ))}
    </nav>
  );
}

export function StudyDomainsScreen() {
  const navigate = useNavigate();

  return (
    <div className={`page-scroll ${styles.page}`}>
      <header className={`screen-pad ${styles.pageHeader}`}>
        <Caption variant="accent">STUDY GUIDE</Caption>
        <h1 className={styles.title}>TRAINING ZONES</h1>
      </header>
      <div className={styles.domainGrid}>
        {STUDY.map((domain) => (
          <ZoneRow
            key={domain.zone}
            zone={domain.zone}
            title={domain.domain}
            onClick={() => navigate(`/study/${domain.zone}`)}
          />
        ))}
      </div>
      <div className={`screen-pad mobile-back`}>
        <Link to="/">
          <Button variant="ghost">[ BACK ]</Button>
        </Link>
      </div>
    </div>
  );
}

export function StudyObjectivesScreen() {
  const { zoneId } = useParams();
  const navigate = useNavigate();
  const zone = STUDY.find((d) => d.zone === Number(zoneId));

  if (!zone) {
    navigate("/study", { replace: true });
    return null;
  }

  return (
    <div className={`page-scroll ${styles.page} ${styles.splitPage}`}>
      <aside className={styles.splitAside}>
        <StudyDomainNav activeZone={zone.zone} />
      </aside>
      <div className={styles.splitMain}>
        <header className={`screen-pad ${styles.pageHeader}`}>
          <Caption>STUDY GUIDE › ZONE {String(zone.zone).padStart(2, "0")}</Caption>
          <h1 className={styles.title}>{zone.domain}</h1>
        </header>
        {zone.objectives.map((obj) => (
          <button
            key={obj.id}
            type="button"
            className={styles.objectiveRow}
            onClick={() => navigate(`/study/${zone.zone}/${obj.id}`)}
          >
            <span className={styles.objId}>{obj.id}</span>
            <span>
              <div className={styles.objName}>{obj.name}</div>
              <div className={styles.objDesc}>{obj.description}</div>
            </span>
          </button>
        ))}
        <div className={`screen-pad mobile-back`}>
          <Button variant="ghost" onClick={() => navigate("/study")}>
            [ BACK TO DOMAINS ]
          </Button>
        </div>
      </div>
    </div>
  );
}

export function StudyDetailScreen() {
  const { zoneId, objectiveId } = useParams();
  const navigate = useNavigate();
  const zone = STUDY.find((d) => d.zone === Number(zoneId));
  const objective = zone?.objectives.find((o) => String(o.id) === objectiveId);

  if (!zone || !objective) {
    navigate("/study", { replace: true });
    return null;
  }

  return (
    <div className={`page-scroll ${styles.page} ${styles.detailPage}`}>
      <aside className={styles.splitAside}>
        <StudyDomainNav activeZone={zone.zone} />
        <div className={styles.objectiveNav}>
          {zone.objectives.map((obj) => (
            <NavLink
              key={obj.id}
              to={`/study/${zone.zone}/${obj.id}`}
              className={({ isActive }) =>
                `${styles.objectiveNavLink} ${isActive ? styles.objectiveNavActive : ""}`
              }
            >
              <span className={styles.objId}>{obj.id}</span> {obj.name}
            </NavLink>
          ))}
        </div>
      </aside>
      <article className={styles.detailMain}>
        <header className={`screen-pad ${styles.pageHeader}`}>
          <Caption>{zone.domain}</Caption>
          <h1 className={styles.title}>
            {objective.id} {objective.name}
          </h1>
          <p className={styles.copy}>{objective.description}</p>
        </header>

        <div className={styles.items}>
          {objective.items.map((item, i) => (
            <section key={i} className={styles.card}>
              <h2 className={styles.cardTitle}>{item.title}</h2>
              {item.body && <p className={styles.copy}>{item.body}</p>}
              {item.type === "table" && item.headers && item.rows && (
                <table className={styles.table}>
                  <thead>
                    <tr>
                      {item.headers.map((h) => (
                        <th key={h}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {item.rows.map((row, ri) => (
                      <tr key={ri}>
                        {row.map((cell, ci) => (
                          <td key={ci}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {item.key_points && (
                <ul className={styles.list}>
                  {item.key_points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className={`screen-pad ${styles.stickyCta} mobile-back`}>
          <Button variant="ghost" onClick={() => navigate(`/study/${zone.zone}`)}>
            [ BACK TO OBJECTIVES ]
          </Button>
        </div>
      </article>
    </div>
  );
}
