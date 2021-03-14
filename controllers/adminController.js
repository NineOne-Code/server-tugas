const fs = require('fs-extra');
const path = require('path');

const Aik = require('../models/Aik')

module.exports = {
    viewDashboard: async (req, res) => {
        try {
            const alertMessage = req.flash('alertMessage');
            const alertStatus = req.flash('alertStatus');
            const alert = {message: alertMessage, status: alertStatus};
            res.render('admin/dashboard/view_dashboard', {
                title: "Tugas NineOne | Dashboard", alert
            });
        } catch (error) {
            req.flash('alertMessage', `${error.message}`);
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/dashboard');
        }
    },
    viewAik: async (req, res) => {
        try {
            const aik = await Aik('get')
            console.log(Aik)
            const alertMessage = req.flash('alertMessage');
            const alertStatus = req.flash('alertStatus');
            const alert = {message: alertMessage, status: alertStatus};
            res.render('admin/aik/view_aik', {
                title: "Tugas NineOne | AIK", alert
            });
        } catch (error) {
            req.flash('alertMessage', `${error.message}`);
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/aik');
        }
    }
};