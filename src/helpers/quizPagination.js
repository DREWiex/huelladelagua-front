
export const quizPagination = (ev) => {

    let newPage;

    switch (ev.target.id) {

      case 'after':
        newPage = page + 1;
        if (newPage <= 5 ) setPage(newPage); // el 5 se cambiará por 15 o por las preguntas totales que tenga.
        break;

      case 'before':
        newPage = page - 1;
        if (newPage >= 1 ) setPage(newPage);
        break;
        
    };
    
};