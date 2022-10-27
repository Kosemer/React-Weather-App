import classes from './LocTempBlock.module.css'

function LocTempBlock(props) {
  return (
    <div className={classes.locTempBlock}>
      <div className={classes.location}>
        <h2>{props.data.name}</h2>
      </div>
      <div className={classes.temp}>
        {props.data.main ? <h1>{props.data.main.temp.toFixed()} C°</h1> : null}
      </div>
      <div className={classes.description}>
        {props.data.weather ? <h3>{props.data.weather[0].main}</h3> : null}
      </div>
    </div>
  );
}

export default LocTempBlock;
