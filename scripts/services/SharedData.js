window.angular.module('castingApp.services.SharedData', [])
    .factory('SharedData', ['$q','$http','CharData', function($q,$http,CharData) {
        'use strict';

        var AllTables = [{
            't101' : {
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't101a' : {
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't102' : {
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't103' : {
                'lowRoll': 1,
                'highRoll': 100,
                'modifier': CharData.Character.cuMod

            },
            't103a': {
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': CharData.Character.cuMod
            },
            't104':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't105':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': CharData.Character.cuMod
            },
            't106':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': CharData.Character.cuMod
            },
            't107':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't108':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't109':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't110':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': CharData.Character.lMod
            },
            't111':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't112':{
                'lowRoll': 1,
                'highRoll': 100,
                'modifier': CharData.Character.biMod
            },
            't113':{
                'lowRoll': 1,
                'highRoll': 100,
                'modifier': null
            },
            't113a':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't113b':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't113b':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't113c':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't113d':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't113e':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't113f':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't113g':{
                'lowRoll': 1,
                'highRoll': 100,
                'modifier': null
            },
            't114a':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't114b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't114b1':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null
            },
            't114b2':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null
            },
            't114b3':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null
            },
            't114b4':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null
            },
            't114b5':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null
            },
            't215':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': CharData.Character.solMod
            },
            't215a':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't215b':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null
            },
            't215c':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null
            },
            't215d':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null
            },
            't215e':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null
            },
            't216a':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't216b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't216b1':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null
            },
            't216b2':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null
            },
            't217':{
                'lowRoll': 1,
                'highRoll': 40,
                'modifier': CharData.Character.solMod
            },
            't217a':{
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null
            },
            't217b':{
                'lowRoll': 1,
                'highRoll': 3,
                'modifier': null
            },
            't217c':{
                'lowRoll': 1,
                'highRoll': 3,
                'modifier': null
            },
            't217d':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null
            },
            't217e':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null
            },
            't318a':{
                'lowRoll': 1,
                'highRoll': 100,
                'modifier': null
            },
            't318b':{
                'lowRoll': 2,
                'highRoll': 20,
                'modifier': null
            },
            't419a':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't419b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't419b1':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't420':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't420a':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't420b':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null
            },
            't421a':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't421b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't422a':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't422b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't423a':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': CharData.Character.solMod
            },
            't423b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't423b1':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null
            },
            't423b2':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null
            },
            't423b3':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null
            },
            't423b4':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null
            },
            't423c':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't423c1':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null
            },
            't423c1a':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null
            },
            't423c1b':{
                'lowRoll': 1,
                'highRoll': 3,
                'modifier': null
            },
            't423d':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't423d1':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null
            },
            't423e':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't423e1':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null
            },
            't424a':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't424b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't424c':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't425':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': CharData.Character.solMod
            },
            't426a':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null
            },
            't426a1':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't426a2':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't426b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't427a':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't427a1':{
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null
            },
            't427a2':{
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null
            },
            't427b':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't427c':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't528':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': CharData.Character.solMod
            },
            't528a':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null
            },
            't528b':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null
            },
            't528c':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null
            },
            't528d':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null
            },
            't528e':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null
            },
            't528f':{
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null
            },
            't528g':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null
            },
            't528h':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't528i':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null
            },
            't528j':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null
            },
            't529':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': CharData.Character.solMod
            },
            't530':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't531':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't532':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't532a':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null
            },
            't533':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't534':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't534a':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't534b':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null
            },
            't534b1':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't534c':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't534d':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't535a1':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't535a2':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't535a3':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't535a4':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't535a5':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't535b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't535b1':{
                'lowRoll': 1,
                'highRoll': 22,
                'modifier': null
            },
            't535b2':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't536':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't537':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't538':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't538a':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': CharData.Character.solMod
            },
            't538b':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': CharData.Character.solMod
            },
            't539':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't539a':{
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null
            },
            't539b':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't539c':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null
            },
            't540':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't540a':{
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null
            },
            't540b':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null
            },
            't541':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't541a':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't541b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't541b1':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't541b2':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null
            },
            't541b3':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null
            },
            't542':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't542a':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't542b':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't543':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't543a':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't543b':{
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null
            },
            't543c':{
                'lowRoll': 2,
                'highRoll': 8,
                'modifier': null
            },
            't544':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't544a':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null
            },
            't544b':{
                'lowRoll': 1,
                'highRoll': 3,
                'modifier': null
            },
            't544c':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null
            },
            't544d':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't545':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't545a':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null
            },
            't546a':{
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null
            },
            't546a1':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null
            },
            't546b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't546b1':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null
            },
            't546b2':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null
            },
            't647':{
                'lowRoll': 2,
                'highRoll': 20,
                'modifier': null
            },
            't648':{
                'lowRoll': 2,
                'highRoll': 20,
                'modifier': null
            },
            't649a':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't649b':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't649b1':{
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null
            },
            't649b1a':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null
            },
            't649b1b':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null
            },
            't649c': {
                'lowRoll': 2,
                'highRoll': 20,
                'modifier': null
            },
            't649d':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't649e':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't649f':{
                'lowRoll': 2,
                'highRoll': 8,
                'modifier': null
            },
            't649f1':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't750':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't751':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't751':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't752':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't753':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't754': {
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't755':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't756':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't757a':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't757b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't758a1':{
                'lowRoll': 1,
                'highRoll': 100,
                'modifier': null
            },
            't758a2':{
                'lowRoll': 1,
                'highRoll': 100,
                'modifier': null
            },
            't758a3':{
                'lowRoll': 1,
                'highRoll': 100,
                'modifier': null
            },
            't758a4':{
                'lowRoll': 1,
                'highRoll': 100,
                'modifier': null
            },
            't758b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't759': {
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't760':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't760a':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't761a':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't761b':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't761c':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't762a':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't762b':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't762c':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't863':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't863a': {
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't863b':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't863c':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't863d':{
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null
            },
            't863e':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't864':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't865':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't866':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't867':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't868':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't869a': {
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't869a1':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null
            },
            't869b':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null
            },
            't870':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't870a':{
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null
            },
            't870b':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null
            },
            't871a':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't871b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't871c':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't872':{
                'lowRoll': 1,
                'highRoll': 100,
                'modifier': null
            },
            't873': {
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't874':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't841a':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null
            },
            't875':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't875a':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null
            },
            't875b':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't875c':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null
            },
            't875d':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null
            },
            't876':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null
            },
            't876a':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null
            },
            't876b': {
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null
            },
            't876c':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null
            },
            't876d':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't876e':{
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null
            },
            't876f':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't877a':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't877b':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't877c':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't877d':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't978':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null
            },
            't978a':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null
            },
            't978b':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null
            },
            't978c':{
				'lowRoll': 1,
				'highRoll': 6,
				'modifier': null
			}
        }];

		var CultureLevels = [
			{
				'name':'Primitive',
				'literacy': 5
			},
			{
				'name':'Nomad',
				'literacy': 10
			},
			{
				'name':'Barbarian',
				'literacy': 10
			},
			{
				'name':'Civilized',
				'literacy': 30
			},
			{
				'name':'Civilized-Decadent',
				'literacy': 20
			}
		]
		var SocialLevels = [
			{
				'name':'Destitute',
				'money': 25
			},
			{
				'name':'Poor',
				'money': 50
			},
			{
				'name':'Comfortable',
				'money': 100
			},
			{
				'name':'Well-to-Do',
				'money': 150
			},
			{
				'name':'Wealthy',
				'money': 300
			},
			{
				'name':'Nobility',
				'money': 100
			},
			{
				'name':'Extremely Wealthy',
				'money': 600
			},
			{
				'name':'Extremely Wealthy Noble',
				'money': 600
			}
		]



        return {
            tables:AllTables,
			culture:CultureLevels,
			social:SocialLevels
        };
    }]);

