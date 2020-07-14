export default function socketMiddleware(socket) {
    return ({dispatch, getState}) => next => action => {
        if (typeof action === 'function') {
            return action(dispatch, getState);
        }

        const { promise, type, types, ...rest } = action;
        if (type !== 'socket' || !promise ) {

            return next(action);
        }


        return promise(socket)
            .then((result) => {
                return next({...rest, ...result, type: types })
            })
    };
}
