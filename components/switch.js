

const switchBtn = () => {
    const TVmode = () => {
        const crt = document.getElementsByClassName("ecran");
        crt[0].classList.toggle("crt");
    }
    return (
    <div className="switch">
        TV Mode
        <input type="checkbox" className="toggle-switch" id="checkbox" onChange={TVmode} defaultChecked/>
      </div>
    );
};

export default switchBtn;