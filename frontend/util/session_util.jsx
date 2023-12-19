export const register = user => {
    $.ajax({
        url: 'api/users',
        method: 'POST',
        data: { user }
    });
};