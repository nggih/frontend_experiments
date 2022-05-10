function Backdrop(props: any) {
    return ( 
        <div className="backdrop-sepia hover:backdrop-sepia-0" onClick={props.onCancel}></div>
    );
    
}

export default Backdrop;