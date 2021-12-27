import * as scoreColors from '../score-colors'

export default function levelOptions(score) {
  if (score >= 0 && score <= 100) {
    return {
      color: scoreColors.NOVICE_COLOR,
      level: 'Beginner',
    }
  }

  if (score >= 101 && score <= 200) {
    return {
      color: scoreColors.PROFICIENT_COLOR,
      level: 'Proficient',
    }
  }

  return {
    color: scoreColors.EXPERT_COLOR,
    level: 'Expert',
  }
}
