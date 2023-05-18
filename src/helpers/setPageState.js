
export const setCurrentPage = (num, nextquiz, currentPage) => {


    if (nextquiz == '' || nextquiz == false) {
        return num
    } else {
        return currentPage
    }


}