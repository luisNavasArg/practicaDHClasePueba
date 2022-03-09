class Reloj extends React.Component {
   constructor(props) {
      super(props);
      this.state = {hora: new Date()};
   }
   comenzar() {
      this.timerID = setInterval(
         () => this.actualiza(),
         1000
      );
   }
   detener() {
      clearInterval(this.timerID);
   }
   actualiza() {
      this.setState({
         hora: new Date()
      });
   }
   reanudar(){
      this.comenzar()
   }
   render() {
      return (
         <div className="container">
            <div className="row d-flex justify-content-center" style={{backgroundColor:this.props.color}}>
               <div className="col-6">
                  <h1>Reloj Digital</h1>
                  <h2>Hora: {this.state.hora.toLocaleTimeString()}</h2>
                  <button className="btn btn-primary m-3" onClick={()=>this.comenzar()}>Comenzar</button>
                  <button className="btn btn-primary m-3" onClick={()=>this.detener()}>Detener</button>
                  <button className="btn btn-primary m-3" onClick={()=>this.reanudar()}>Reanudar</button>
               </div>
            </div>
         </div>
      );
   }
}

ReactDOM.render(
   <Reloj color="beige"/>,
   document.getElementById('root')
);