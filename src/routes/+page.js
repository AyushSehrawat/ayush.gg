export function load({ url }) {
    const page = url.searchParams.get('page');
    return {
        page: page ? page : 'home',
    }
}
