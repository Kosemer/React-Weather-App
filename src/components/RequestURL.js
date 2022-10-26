function RequestURL(props) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.location}&units=metric&lang=hu&appid=5df8784b76b421fabc90a1eaf2fac2be`;
}

export default RequestURL;