function View(props) {
  const style = {
    height: props.height ? props.height : "60vh",
    display: props.display ? props.display : "flex",
  };
  return (
    <div className="view" style={style}>
      {props.children}
    </div>
  );
}

export default View;
