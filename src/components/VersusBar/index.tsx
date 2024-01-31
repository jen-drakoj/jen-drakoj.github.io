import styles from "./styles.module.css";

enum Side {
  Left,
  Right,
  Center,
}

export enum Preference {
  OnlyLeft,
  MostlyLeft,
  Same,
  MostlyRight,
  OnlyRight,
}

export interface Props {
  left: string;
  right: string;
  preference: Preference;
}

function PreferenceToRatio(preference: Preference) {
  switch (preference) {
    case Preference.OnlyLeft:
      return 0.95;
    case Preference.MostlyLeft:
      return 0.75;
    case Preference.Same:
      return 0.5;
    case Preference.MostlyRight:
      return 0.25;
    case Preference.OnlyRight:
      return 0.05;
    default:
      return 0.5;
  }
}

function PreferenceToSide(preference: Preference) {
  switch (preference) {
    case Preference.OnlyLeft:
    case Preference.MostlyLeft:
      return Side.Left;
    case Preference.MostlyRight:
    case Preference.OnlyRight:
      return Side.Right;
    case Preference.Same:
    default:
      return Side.Center;
  }
}

function IsSideWinner(expected_side: Side, preference: Preference) {
  let actual_side = PreferenceToSide(preference);
  return expected_side === actual_side || actual_side === Side.Center;
}

export function VersusBar(props: Props): JSX.Element {
  let percentage = PreferenceToRatio(props.preference) * 100;

  return (
    <div className={styles.versus}>
      <span
        className={`${styles.label} ${
          IsSideWinner(Side.Left, props.preference) ? styles.winner : ""
        }`}>
        {props.left}
      </span>
      <div className={styles.bar}>
        <div className={styles.innerBar} style={{ width: `${percentage}%` }} />
      </div>
      <span
        className={`${styles.label} ${
          IsSideWinner(Side.Right, props.preference) ? styles.winner : ""
        }`}>
        {props.right}
      </span>
    </div>
  );
}

VersusBar.defaultProps = {
  left_label: "Left",
  right_label: "Right",
  preference: Preference.Same,
};

export default {
  Preference,
  VersusBar,
};
