var express = require('express');
var router = express.Router();
//引入数据库模块
const connection = require('./connMYSQL')
//连接数据库
connection.connect(() => {
    console.log('连接数据库成功！')
})
//查询全部歌手列表
router.get("/singer", (req, res, next) => {
    const sqlSelectSinger = 'select * from singer order by singerPop desc';
    connection.query(sqlSelectSinger, (err, data) => {
        if (!err) {
            res.send(data)
        } else {
            console.log(err)
        }
    })
})
//筛选歌手列表
router.post("/singerScreen", (req, res, next) => {
    var place = req.body.place;
    var gender = req.body.gender;
    if (place == "全部" && gender == "全部") {
        const sqlSelectSinger = 'select * from singer order by singerPop desc';
        connection.query(sqlSelectSinger, (err, data) => {
            if (!err) {
                // console.log(data)
                res.send(data)
            } else {
                console.log(err)
            }
        })
    } else if (place == "全部") {
        const sqlSelectSinger1 = 'select * from singer where singerGender=? order by singerPop desc';
        connection.query(sqlSelectSinger1, gender, (err, data) => {
            if (!err) {
                // console.log(data)
                res.send(data)
            } else {
                console.log(err)
            }
        })
    } else if (gender == "全部") {
        const sqlSelectSinger2 = 'select * from singer where singerType=? order by singerPop desc';
        connection.query(sqlSelectSinger2, place, (err, data) => {
            if (!err) {
                // console.log(data)
                res.send(data)
            } else {
                console.log(err)
            }
        })
    } else {
        const sqlSelectSinger3 = 'select * from singer where singerType=? and singerGender=? order by singerPop desc';
        connection.query(sqlSelectSinger3, [place, gender], (err, data) => {
            if (!err) {
                // console.log(data)
                res.send(data)
            } else {
                console.log(err)
            }
        })
    }
})
//查询选中歌手的歌曲名，歌曲专辑名，歌曲id
router.post("/singlesinger", (req, res, next) => {
    //  console.log(req.body.singerId)
    let singerId = req.body.singerId
    let singerInfo = {
        ademList: [],
        musicList: [],
        singer: {}
    };
    const sqlSelectMusic = 'SELECT singer.singerId,music.musicAdemId ,music.musicId,singer.singerName,music.musicName,adem.ademName,adem.ademImgSrc,musicSrc     FROM music, adem, singer    WHERE music.musicSingerId = adem.ademSingerId    AND music.musicAdemId = adem.ademId AND singer.singerId = adem.ademSingerId AND music.musicSingerId = singer.singerId AND music.musicSingerId = ? ';
    const sqlSelectSinger = 'SELECT * FROM singer WHERE singerId=?';
    const sqlSelectAdem = 'SELECT ademId,ademName,ademImgSrc FROM adem WHERE ademSingerId=?';
    connection.query(sqlSelectMusic, singerId, (err, data1) => {
        if (!err) {
            // console.log(data1)
            singerInfo.musicList = data1;
            // console.log(singerInfo)
            connection.query(sqlSelectAdem, singerId, (err, data2) => {
                if (!err) {
                    // console.log(data)
                    singerInfo.ademList = data2;
                    // console.log(singerInfo)
                    connection.query(sqlSelectSinger, singerId, (err, data3) => {
                        if (!err) {
                            // console.log(data)
                            singerInfo.singer = data3[0];
                            // console.log(singerInfo)
                            // console.log(singerInfo)
                            res.send(singerInfo)
                        } else {
                            console.log(err)
                        }
                    });
                } else {
                    console.log(err)
                }
            });
        } else {
            console.log(err)
        }
    });


})
//获取专辑对应音乐
router.post("/ademSong", (req, res, next) => {
    let ademInfo = {
        adem: {},
        ademMusic: []
    };
    let ademId = req.body.ademId;
    const sqlSelectAdemMusic = 'SELECT adem.ademImgSrc,adem.ademName,music.musicId,musicName,music.musicSrc,singer.singerId,singer.singerName FROM music,adem,singer WHERE adem.ademId = music.musicAdemId and singer.singerId=adem.ademSingerId and adem.ademId=?';
    const sqlSelectAdem = 'SELECT adem.*,singer.singerName FROM adem,singer WHERE singer.singerId=adem.ademSingerId and adem.ademId=?';
    connection.query(sqlSelectAdemMusic, ademId, (err, data1) => {
        if (!err) {
            ademInfo.ademMusic = data1
            connection.query(sqlSelectAdem, ademId, (err, data2) => {
                if (!err) {
                    ademInfo.adem = data2[0]
                    console.log(ademInfo)
                    res.send(ademInfo)
                } else {
                    console.log(err)
                }
            })
        } else {
            console.log(err)
        }
    })
});
//每日推荐
router.get("/todayMusic", (req, res) => {
    const sqlSelectTodayMusic = 'SELECT * FROM music,singer,adem WHERE music.musicAdemId=adem.ademId AND singer.singerId=music.musicSingerId and adem.ademSingerId=singer.singerId  ORDER BY  RAND() LIMIT 10'
    connection.query(sqlSelectTodayMusic, (err, data) => {
        if (!err) {
            res.send(data)
        } else {
            console.log(err)
        }
    })
})
//增加歌曲人气
router.post('/musicPopUp', (req, res) => {
    let musicId = req.body.musicId
    let singerId = req.body.singerId
    const sqlSelectMusicUpPop = "update music set musicPop=musicPop+1 where musicId = ?"
    const sqlSelectSingerUpPop = "update singer set singerPop=singerPop+1 where singerId = ?"
    connection.query(sqlSelectMusicUpPop, musicId, (err, data) => {
        if (err) {
            console.log(err)
        }
    })
    connection.query(sqlSelectSingerUpPop, singerId,
        (err, data) => {
            if (err) {
                console.log(err)
            }
        });


})
//获取排行榜信息
router.get('/rinkData', (req, res) => {
    var RinkListArr = {
        rink1: [],
        rink2: {},
        rink3: {},
        rink4: {},
    }
    const sqlSelectRink = 'select music.*,adem.ademImgSrc,singer.singerName from music,adem,singer WHERE music.musicAdemId=adem.ademId and singer.singerId=adem.ademSingerId and music.musicSingerId=singer.singerId  order by music.musicPop desc limit 0,3;';
    const sqlSelectRink1 = "select music.*,adem.ademImgSrc from music,adem,singer WHERE singer.singerId=music.musicSingerId and singer.singerId=adem.ademSingerId and music.musicAdemId=adem.ademId and singer.singerType in ('内地','港台') order by music.musicPop desc limit 0,1;";
    const sqlSelectRink2 = "select music.*,adem.ademImgSrc from music,adem,singer WHERE singer.singerId=music.musicSingerId and singer.singerId=adem.ademSingerId and music.musicAdemId=adem.ademId and singer.singerType in ('韩国','日本') order by music.musicPop desc limit 0,1;";
    const sqlSelectRink3 = "select music.*,adem.ademImgSrc from music,adem,singer WHERE singer.singerId=music.musicSingerId and singer.singerId=adem.ademSingerId and music.musicAdemId=adem.ademId and singer.singerType ='欧美' order by music.musicPop desc limit 0,1;";
    connection.query(sqlSelectRink, (err, data) => {
        if (err) {
            throw err;
        } else {
            RinkListArr.rink1 = data
            connection.query(sqlSelectRink1, (err, data) => {
                if (err) {
                    throw err;
                } else {
                    RinkListArr.rink2 = data[0]
                    connection.query(sqlSelectRink2, (err, data) => {
                        if (err) {
                            throw err;
                        } else {
                            RinkListArr.rink3 = data[0]
                            connection.query(sqlSelectRink3, (err, data) => {
                                if (err) {
                                    throw err;
                                } else {
                                    RinkListArr.rink4 = data[0]
                                    res.send(RinkListArr)
                                }
                            })
                        }
                    })
                }
            })
        }
    })
})
//获取排行榜歌曲
router.post('/rinkList', (req, res) => {
    let rinkType = req.body.rinkType
    let sqlSelectRink
    if (rinkType == 0) {
        sqlSelectRink = 'select music.*,adem.ademName,adem.ademImgSrc,singer.singerName,singer.singerId from music,adem,singer WHERE music.musicAdemId=adem.ademId and singer.singerId=adem.ademSingerId and music.musicSingerId=singer.singerId  order by music.musicPop desc limit 0,10;';
    } else if (rinkType == 1) {
        sqlSelectRink = "select music.*,adem.ademName,adem.ademImgSrc,singer.singerName,singer.singerId from music,adem,singer WHERE music.musicAdemId=adem.ademId and singer.singerId=adem.ademSingerId and music.musicSingerId=singer.singerId and singer.singerType in ('内地','港台') order by music.musicPop desc limit 0,10;";
    } else if (rinkType == 2) {
        sqlSelectRink = "select music.*,adem.ademName,adem.ademImgSrc,singer.singerName,singer.singerId from music,adem,singer WHERE music.musicAdemId=adem.ademId and singer.singerId=adem.ademSingerId and music.musicSingerId=singer.singerId and singer.singerType in ('韩国','日本') order by music.musicPop desc limit 0,10;";
    } else if (rinkType == 3) {
        sqlSelectRink = "select music.*,adem.ademName,adem.ademImgSrc,singer.singerName,singer.singerId from music,adem,singer WHERE music.musicAdemId=adem.ademId and singer.singerId=adem.ademSingerId and music.musicSingerId=singer.singerId and singer.singerType = '欧美' order by music.musicPop desc limit 0,10;";
    }
    console.log(sqlSelectRink)
    connection.query(sqlSelectRink, (err, data) => {
        if (err) {
            throw err;
        } else {
            res.send(data)
        }
    })



})
module.exports = router;