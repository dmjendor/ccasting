window.angular.module('castingApp.services.SharedData', [])
    .factory('SharedData', ['$q','$http','CharData', function($q,$http,CharData) {
        'use strict';

        var AllTables = [{
            't101' : {
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
				'obj': CharData.Character.race,
                'increment': false
            },
            't101a' : {
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
				'obj': CharData.Character.race,
                'increment': false
            },
            't102' : {
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
				'obj': CharData.Character.parent.culture,
                'increment': false
            },
            't103' : {
                'lowRoll': 1,
                'highRoll': 100,
                'modifier': CharData.Character.cuMod,
				'obj': CharData.Character.parent.status,
                'increment': false
            },
            't103a': {
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': CharData.Character.cuMod,
				'obj': CharData.Character.parent.status,
                'increment': false
            },
            't104':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': CharData.Character.cuMod,
				'obj': CharData.Character.family,
                'increment': false
            },
            't105':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': CharData.Character.cuMod,
				'obj': CharData.Character.legitimacy,
                'increment': false
            },
            't106':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': CharData.Character.cuMod,
				'obj': CharData.Character.family,
                'increment': false
            },
            't107':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
				'obj': CharData.Character.family.siblings,
                'increment': false
            },
            't108':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
				'obj': CharData.Character.birth.order,
                'increment': false
            },
            't109':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
				'obj': CharData.Character.birth.time,
                'increment': false
            },
            't110':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': CharData.Character.lMod,
				'obj': CharData.Character.birth.place,
                'increment': false
            },
            't111':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
				'obj': CharData.Character.birth.place,
                'increment': false
            },
            't112':{
                'lowRoll': 1,
                'highRoll': 100,
                'modifier': CharData.Character.biMod,
				'obj': CharData.Character.birth.events,
                'increment': false
            },
            't113':{
                'lowRoll': 1,
                'highRoll': 100,
                'modifier': null,
				'obj': CharData.Character.birth.events.list,
				'increment': true
            },
            't113a':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
				'obj': CharData.Character.birth.events.list,
                'increment': false
            },
            't113b':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
				'obj': CharData.Character.birth.events.list,
                'increment': false
            },
            't113c':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
				'obj': CharData.Character.birth.events.list,
                'increment': false
            },
            't113d':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
				'obj': CharData.Character.birth.events.list,
                'increment': false
            },
            't113e':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
				'obj': CharData.Character.birth.events.list,
                'increment': false
            },
            't113f':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
				'obj': CharData.Character.birth.events.list,
                'increment': false
            },
            't113g':{
                'lowRoll': 1,
                'highRoll': 100,
                'modifier': null,
				'obj': CharData.Character.birth.events.list,
                'increment': false
            },
            't114a':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't114b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't114b1':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't114b2':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't114b3':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't114b4':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't114b5':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't215':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': CharData.Character.solMod,
                'obj': null,
                'increment': false
            },
            't215a':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't215b':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't215c':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't215d':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't215e':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't216a':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't216b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't216b1':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't216b2':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't217':{
                'lowRoll': 1,
                'highRoll': 40,
                'modifier': CharData.Character.solMod,
                'obj': null,
                'increment': false
            },
            't217a':{
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't217b':{
                'lowRoll': 1,
                'highRoll': 3,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't217c':{
                'lowRoll': 1,
                'highRoll': 3,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't217d':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't217e':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't318a':{
                'lowRoll': 1,
                'highRoll': 100,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't318b':{
                'lowRoll': 2,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't419a':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't419b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't419b1':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't420':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't420a':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't420b':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't421a':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't421b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't422a':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't422b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't423a':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': CharData.Character.solMod,
                'obj': null,
                'increment': false
            },
            't423b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't423b1':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't423b2':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't423b3':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't423b4':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't423c':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't423c1':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't423c1a':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't423c1b':{
                'lowRoll': 1,
                'highRoll': 3,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't423d':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't423d1':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't423e':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't423e1':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't424a':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't424b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't424c':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't425':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': CharData.Character.solMod,
                'obj': null,
                'increment': false
            },
            't426a':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't426a1':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't426a2':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't426b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't427a':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't427a1':{
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't427a2':{
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't427b':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't427c':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't528':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': CharData.Character.solMod,
                'obj': null,
                'increment': false
            },
            't528a':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't528b':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't528c':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't528d':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't528e':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't528f':{
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't528g':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't528h':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't528i':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't528j':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't529':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': CharData.Character.solMod,
                'obj': null,
                'increment': false
            },
            't530':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't531':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't532':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't532a':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't533':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't534':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't534a':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't534b':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't534b1':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't534c':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't534d':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't535a1':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't535a2':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't535a3':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't535a4':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't535a5':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't535b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't535b1':{
                'lowRoll': 1,
                'highRoll': 22,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't535b2':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't536':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't537':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't538':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't538a':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': CharData.Character.solMod,
                'obj': null,
                'increment': false
            },
            't538b':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': CharData.Character.solMod,
                'obj': null,
                'increment': false
            },
            't539':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't539a':{
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't539b':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't539c':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't540':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't540a':{
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't540b':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't541':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't541a':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't541b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't541b1':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't541b2':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't541b3':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't542':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't542a':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't542b':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't543':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't543a':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't543b':{
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't543c':{
                'lowRoll': 2,
                'highRoll': 8,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't544':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't544a':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't544b':{
                'lowRoll': 1,
                'highRoll': 3,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't544c':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't544d':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't545':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't545a':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't546a':{
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't546a1':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't546b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't546b1':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't546b2':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't647':{
                'lowRoll': 2,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't648':{
                'lowRoll': 2,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't649a':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't649b':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't649b1':{
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't649b1a':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't649b1b':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't649c': {
                'lowRoll': 2,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't649d':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't649e':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't649f':{
                'lowRoll': 2,
                'highRoll': 8,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't649f1':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't750':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't750a':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't751':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't751':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't752':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't753':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't754': {
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't755':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't756':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't757a':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't757b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't758a1':{
                'lowRoll': 1,
                'highRoll': 100,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't758a2':{
                'lowRoll': 1,
                'highRoll': 100,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't758a3':{
                'lowRoll': 1,
                'highRoll': 100,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't758a4':{
                'lowRoll': 1,
                'highRoll': 100,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't758b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't759': {
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't760':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't760a':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't761a':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't761b':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't761c':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't762a':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't762b':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't762c':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't863':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't863a': {
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't863b':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't863c':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't863d':{
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't863e':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't864':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't865':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't866':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't867':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't868':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't869a': {
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't869a1':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't869b':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't870':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't870a':{
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't870b':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't871a':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't871b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't871c':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't872':{
                'lowRoll': 1,
                'highRoll': 100,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't873': {
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't874':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't841a':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't875':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't875a':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't875b':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't875c':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't875d':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't876':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't876a':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't876b': {
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't876c':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't876d':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't876e':{
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't876f':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't877a':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't877b':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't877c':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't877d':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't978':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't978a':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': false
            },
            't978b':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': false
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

