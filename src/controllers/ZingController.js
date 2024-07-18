const { zing } = require("zingmp3-api-next");

class ZingController {

    // 1.Home
    getHome(req, res) {
        zing.get_home()
            .then((data) => {
                res.json(data);
            })
    }

    // 2.HubHome
    getHubHome(req, res) {
        zing.get_hub_home()
            .then(data => {
                res.json(data);
            })
    }

    // 3.HubDetail
    getHubDetail(req, res) {
        zing.get_hub_detail(req.query.id)
            .then(data => {
                res.json(data);
            })
    }

    // 4.Song
    getSong(req, res) {
        zing.get_song(req.query.id).then((data) => {
            res.json(data)
        })
    }

    // 5.Playlist
    getPlaylist(req, res) {
        zing.get_playlist(req.query.id).then((data) => {
            res.json(data)
        })
    }

    getSuggestedPlaylist(req, res) {
        zing.get_suggested_playlists(req.query.id).then((data) => {
            res.json(data)
        })
    }

    // 6.Top100
    getTop100(req, res) {
        zing.get_top_100().then((data) => {
            res.json(data);
        })
    }

    // 7.HomeChart
    getHomeChart(req, res) {
        zing.get_home_chart().then((data) => {
            res.json(data);
        })
    }

    // 8.ReleaseChart
    getNewReleaseChart(req, res) {
        zing.get_new_release_chart().then((data) => {
            res.json(data)
        })
    }

    // 9.WeekChart
    getWeekChart(req, res) {
        zing.get_week_chart().then((data) => {
            res.json(data)
        })
    }

    // 10.InfoSong
    getInfoSong(req, res) {
        zing.get_song_info(req.query.id).then((data) => {
            res.json(data);
        })
    }

    // 11.ArtistInfo
    getArtist(req, res) {
        zing.get_artist(req.query.name).then((data) => {
            res.json(data)
        })
    }

    // 13. Lyric
    getSongLyric(req, res) {
        zing.get_song_lyric(req.query.id).then((data) => {
            res.json(data)
        })
    }

    // 14. Search
    search(req, res) {
        zing.search(req.query.keyword).then((data) => {
            res.json(data)
        })
    }

    searchAll(req, res) {
        zing.search_all(req.query.keyword).then((data) => {
            res.json(data)
        })
    }

    searchByType(req, res) {
        zing.search_by_type(req.query.keyword, req.query.type).then((data) => {
            res.json(data)
        })
    }

    // 15. ListMV
    getListMV(req, res) {
        zing.get_list_mv(req.query.id).then((data) => {
            res.json(data)
        })
    }

    // 16. CategoryMV
    getCategoryMV(req, res) {
        zing.get_category_mv(req.query.id).then((data) => {
            res.json(data)
        })
    }

    // 17. MV
    getMV(req, res) {
        zing.get_mv(req.query.id).then((data) => {
            res.json(data)
        })
    }

}

module.exports = new ZingController
