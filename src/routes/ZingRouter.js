const express = require("express")
const router = express.Router()

const ZingController = require("../controllers/ZingController")

// getSong
router.get("/song", ZingController.getSong)

// getPlaylist + ALbum
router.get("/playlist", ZingController.getPlaylist)

// Suggest getPlaylist + ALbum
router.get("/suggested_playlists", ZingController.getSuggestedPlaylist)

// getHome
router.get("/home", ZingController.getHome)

// getHubHome
router.get("/hub-home", ZingController.getHubHome)

// getHubDetail
router.get("/hub-detail", ZingController.getHubDetail)

// getTop100
router.get("/top100", ZingController.getTop100)

// getChartHome
router.get("/homechart", ZingController.getHomeChart)

// getNewReleaseChart
router.get("/newreleasechart", ZingController.getNewReleaseChart)

// getWeekChart
router.get("/weekchart", ZingController.getWeekChart)

// getInfoSong
router.get("/infosong", ZingController.getInfoSong)

// getArtist
router.get("/artist", ZingController.getArtist)

// getLyric
router.get("/lyric", ZingController.getSongLyric)

// search
router.get("/search", ZingController.searchAll)
router.get("/search-by-type", ZingController.searchByType)
router.get("/recommend_keyword", ZingController.getRecommendKeyword)


// getListMV
router.get("/listmv", ZingController.getListMV)

// getCategoryMV
router.get("/categorymv", ZingController.getCategoryMV)

// getVideo
router.get("/video", ZingController.getMV)

module.exports = router
