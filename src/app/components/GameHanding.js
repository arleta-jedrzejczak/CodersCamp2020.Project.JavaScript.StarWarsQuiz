class EventsHandlers {
    setEvents()
    {
        const answers = document.querySelectorAll('.answer');

        if (answers) {
            console.log(answers);
            answers.from(el  => {
                console.log(el);
                el.addEventListener('click', ev => {
                    ev.preventDefault();
        
                    console.log(el);
                });
            });
        } else {
            console.log('nope');
        }
    }
}

export default EventsHandlers;