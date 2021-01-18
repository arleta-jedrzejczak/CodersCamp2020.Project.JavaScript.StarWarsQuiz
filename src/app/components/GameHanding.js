class EventsHandlers {
    setEvents()
    {
        const answers = document.querySelectorAll('.answer');

        if (answers) {
            answers.from(el  => {
                el.addEventListener('click', ev => {
                    ev.preventDefault();
        
                    console.log(el);
                });
            });
        }
    }
}

export default EventsHandlers;