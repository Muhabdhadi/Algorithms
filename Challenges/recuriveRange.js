function recusriveRange(number) {
    if(number === 0 ) return 0;

    return number + recusriveRange(--number)
}