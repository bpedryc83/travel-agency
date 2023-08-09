import styles from './SetAmount.module.scss';

const SetAmount = ({ peopleAmount, setPeopleAmount, maxPeopleAmount, setActiveButton }) => {

  const minusOne = (e) => {
    e.preventDefault();
    if (peopleAmount > 1) {
      if (setActiveButton) {
        setActiveButton(true);
      }
      setPeopleAmount(peopleAmount => peopleAmount - 1);
    }
  }
  const plusOne = (e) => {
    e.preventDefault();
    if (peopleAmount < maxPeopleAmount) {
      if (setActiveButton) {
        setActiveButton(true);
      }
      setPeopleAmount(peopleAmount => peopleAmount + 1);
    }
  }
return (
  <div className={`${styles.inputRow}`}>
    <span className={`${styles.minus}`} onClick={e => minusOne(e)} onMouseDown={e => e.preventDefault()}>-</span>
    <input value={peopleAmount} type="number" minLength="1" maxLength="2" min="1" max="20" className={`${styles.input}`} readOnly></input> 
    <span className={`${styles.plus}`} onClick={e => plusOne(e)} onMouseDown={e => e.preventDefault()}>+</span>
  </div>
  )
}

export default SetAmount;