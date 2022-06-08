const router = require('express').Router();
const {Post, User, Comment} = require('../models');
const auth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const post = await Post.findAll({
            include: [{
                model: User,
                attributes: ['name']
            }],

            });

            const posts = post.map((post => post.get({
                plain: true
            })));

            res.render('homepage', {
                posts,
                logged_in: req.session.logged_in
            });
    } catch (err) {
        res.status(500).json(err);
    }});

router.get('/post/:id', async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id, {
            include: [
            User, 
            {
                model: Comment,
                // attributes: ['id', 'post_comment', 'date_created', 'user_id'],
                include: [User]
            }]});

            const postjson = post.get({plain: true});
            const postU = post.user_id === req.session.user_id

            res.render('post', {
                post:  postjson,
                logged_in: req.session.logged_in
            });
    } catch (err) {
        res.status(500).json(err);
    }});

router.get('/post/edit/:id', auth, async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id, {
            title: req.body.title,
            content: req.body.content,
        },
        {
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            }});

        const posts = post.get({plain: true});

        res.render('edit', {
            ...post,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }});

    router.get('/login', (req, res) => {
        if (req.session.logged_in) {
            res.redirect('/');
        } else {
            res.render('login');
        }});

module.exports = router;