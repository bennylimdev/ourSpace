export const getUsers = () => (
    $.ajax({
        method: 'GET',
        url: 'api/users'
    })
)

export const getUser = (userId) => (
    $.ajax({
        url: `api/users/${userId}`
    })
)

export const updateUser = user => (
    $.ajax({
        url: `api/users/${user.id}`,
        method: 'PATCH',
        data: user
    })
)