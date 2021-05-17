function View(props) {
  const style = {
    height: props.height ? props.height : "60vh",
    flexDirection: props.direction ? props.direction : "row",
  };
  return (
    <div className="view" style={style}>
      {props.children}
    </div>
  );
}

export default View;
