let isClosed = (ch) => {
    return [')', ']', '}'].indexOf(ch) > -1;
}

export default isClosed