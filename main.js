const rSlider = document.getElementById("redSlider");
const gSlider = document.getElementById("greenSlider");
const bSlider = document.getElementById("blueSlider");

const rHexCode = document.getElementById("redHexCode");
const gHexCode = document.getElementById("greenHexCode");
const bHexCode = document.getElementById("blueHexCode");

const mainColorDisplay = document.getElementById("mainColorDisplay");

const rColorDisplay = document.getElementById("redColorDisplay");
const gColorDisplay = document.getElementById("greenColorDisplay");
const bColorDisplay = document.getElementById("blueColorDisplay");

const colorDisplay = [rColorDisplay, gColorDisplay, bColorDisplay];

const sliders = [rSlider, gSlider, bSlider];

const hexCode = [rHexCode, gHexCode, bHexCode];

const toHexCode = (val) => {
  let hexCodeValue = parseInt(val).toString(16);
  return hexCodeValue.length == 1 ? "0" + hexCodeValue : hexCodeValue;
};

mainColorDisplay.style.background = (
  `#${toHexCode(rSlider.value)}${gSlider.value}${bSlider.value}`
);

colorDisplay[0].style.background = `#${toHexCode(rSlider.value)}0000`;
    colorDisplay[1].style.background = `#00${toHexCode(gSlider.value)}00`;
    colorDisplay[2].style.background = `#0000${toHexCode(bSlider.value)}`;

const toRGBCode = (val) => {
  return val;
};

rColorDisplay.innerText = toRGBCode(rSlider.value);
gColorDisplay.innerText = toRGBCode(gSlider.value);
bColorDisplay.innerText = toRGBCode(bSlider.value);

rHexCode.innerText = toHexCode(rSlider.value);
gHexCode.innerText = toHexCode(gSlider.value);
bHexCode.innerText = toHexCode(bSlider.value)

for (let i = 0; i < sliders.length; i++) {
  
  sliders[i].oninput = () => {
    hexCode[i].innerText = toHexCode(sliders[i].value);
    colorDisplay[i].innerText = sliders[i].value
    mainColorDisplay.style.background = `#${hexCode[0].innerText}${hexCode[1].innerText}${hexCode[2].innerText}`;

    colorDisplay[0].style.background = `#${hexCode[0].innerText}0000`;
    colorDisplay[1].style.background = `#00${hexCode[1].innerText}00`;
    colorDisplay[2].style.background = `#0000${hexCode[2].innerText}`
    //console.log(toHexCode(sliders[i].value))
  };
}




