

const switchBtn = () => {
    const TVmode = () => {
        const crt = document.getElementsByClassName("ecran");
        crt[0].classList.toggle("crt");
    }
    return (
    <div className="switch">
        crt
        <input type="checkbox" className="toggle-switch" id="checkbox" onChange={TVmode} defaultUnChecked/>
      </div>
    );
};

export default switchBtn;