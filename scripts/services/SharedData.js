window.angular.module('castingApp.services.SharedData', [])
    .factory('SharedData', ['$q','$http','CharData', function($q,$http,CharData) {
        'use strict';

        var AllTables = [{
			't5' : {
				'lowRoll': 1,
                'highRoll': 1,
                'modifier': null,
				'obj': null,
                'increment': true

			},
			't8' : {
				'lowRoll': 1,
                'highRoll': 18,
                'modifier': null,
				'obj': null,
                'increment': true
			},
            't101' : {
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
				'obj': 'CharData.Character.race',
                'increment': true
            },
            't101a' : {
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
				'obj': 'CharData.Character.race',
                'increment': true
            },
            't102' : {
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
				'obj': 'CharData.Character.parent.culture',
                'increment': true
            },
            't103' : {
                'lowRoll': 1,
                'highRoll': 100,
                'modifier': 'CharData.Character.cuMod',
				'obj': 'CharData.Character.parent.status',
                'increment': true
            },
            't103a': {
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': 'CharData.Character.cuMod',
				'obj': 'CharData.Character.parent.status',
                'increment': true
            },
            't104':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': 'CharData.Character.cuMod',
				'obj': 'CharData.Character.family',
                'increment': true
            },
            't105':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': 'CharData.Character.cuMod',
				'obj': 'CharData.Character.legitimacy',
                'increment': true
            },
            't106':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': 'CharData.Character.cuMod',
				'obj': 'CharData.Character.family',
                'increment': true
            },
            't107':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
				'obj': 'CharData.Character.family.siblings',
                'increment': true
            },
            't108':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
				'obj': 'CharData.Character.birth.order',
                'increment': true
            },
            't109':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
				'obj': 'CharData.Character.birth.time',
                'increment': true
            },
            't110':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': 'CharData.Character.lMod',
				'obj': 'CharData.Character.birth.place',
                'increment': true
            },
            't111':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
				'obj': 'CharData.Character.birth.place',
                'increment': true
            },
            't112':{
                'lowRoll': 1,
                'highRoll': 100,
                'modifier': 'CharData.Character.biMod',
				'obj': 'CharData.Character.birth.events',
                'increment': true
            },
            't113':{
                'lowRoll': 1,
                'highRoll': 100,
                'modifier': null,
				'obj': 'CharData.Character.birth.events',
				'increment': true
            },
            't113a':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
				'obj': 'CharData.Character.birth.events',
                'increment': true
            },
            't113b':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
				'obj': 'CharData.Character.birth.events',
                'increment': true
            },
            't113c':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
				'obj': 'CharData.Character.birth.events',
                'increment': true
            },
            't113d':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
				'obj': 'CharData.Character.birth.events',
                'increment': true
            },
            't113e':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
				'obj': 'CharData.Character.birth.events',
                'increment': true
            },
            't113f':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
				'obj': 'CharData.Character.birth.events',
                'increment': true
            },
            't113g':{
                'lowRoll': 1,
                'highRoll': 100,
                'modifier': null,
				'obj': 'CharData.Character.birth.events',
                'increment': true
            },
            't114a':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't114b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't114b1':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't114b2':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't114b3':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't114b4':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't114b5':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't215':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': 'CharData.Character.solMod',
                'obj': null,
                'increment': true
            },
            't215a':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't215b':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't215c':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't215d':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't215e':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't216a':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't216b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't216b1':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't216b2':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't217':{
                'lowRoll': 1,
                'highRoll': 40,
                'modifier': 'CharData.Character.solMod',
                'obj': null,
                'increment': true
            },
            't217a':{
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't217b':{
                'lowRoll': 1,
                'highRoll': 3,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't217c':{
                'lowRoll': 1,
                'highRoll': 3,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't217d':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't217e':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't318a':{
                'lowRoll': 1,
                'highRoll': 100,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't318b':{
                'lowRoll': 2,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't419a':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't419b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't419b1':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't420':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't420a':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't420b':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't421a':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't421b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't422a':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't422b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't423a':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': 'CharData.Character.solMod',
                'obj': null,
                'increment': true
            },
            't423b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't423b1':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't423b2':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't423b3':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't423b4':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't423c':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't423c1':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't423c1a':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't423c1b':{
                'lowRoll': 1,
                'highRoll': 3,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't423d':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't423d1':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't423e':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't423e1':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't424a':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't424b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't424c':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't425':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': 'CharData.Character.solMod',
                'obj': null,
                'increment': true
            },
            't426a':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't426a1':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't426a2':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't426b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't427a':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't427a1':{
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't427a2':{
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't427b':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't427c':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't528':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': 'CharData.Character.solMod',
                'obj': null,
                'increment': true
            },
            't528a':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't528b':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't528c':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't528d':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't528e':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't528f':{
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't528g':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't528h':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't528i':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't528j':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't529':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': 'CharData.Character.solMod',
                'obj': null,
                'increment': true
            },
            't530':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't531':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't532':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't532a':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't533':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't534':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't534a':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't534b':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't534b1':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't534c':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't534d':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't535a1':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't535a2':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't535a3':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't535a4':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't535a5':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't535b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't535b1':{
                'lowRoll': 1,
                'highRoll': 22,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't535b2':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't536':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't537':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't538':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't538a':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': 'CharData.Character.solMod',
                'obj': null,
                'increment': true
            },
            't538b':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': 'CharData.Character.solMod',
                'obj': null,
                'increment': true
            },
            't539':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't539a':{
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't539b':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't539c':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't540':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't540a':{
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't540b':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't541':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't541a':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't541b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't541b1':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't541b2':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't541b3':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't542':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't542a':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't542b':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't543':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't543a':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
			't543a1': {
			   'lowRoll': 1,
                'highRoll': 3,
                'modifier': null,
				'obj': '',
                'increment': true
			},
            't543b':{
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't543c':{
                'lowRoll': 2,
                'highRoll': 8,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't544':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't544a':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't544b':{
                'lowRoll': 1,
                'highRoll': 3,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't544c':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't544d':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't545':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't545a':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't546a':{
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't546a1':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't546b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't546b1':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't546b2':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't647':{
                'lowRoll': 2,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't648':{
                'lowRoll': 2,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't649a':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't649b':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't649b1':{
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't649b1a':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't649b1b':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't649c': {
                'lowRoll': 2,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't649d':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't649e':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't649f':{
                'lowRoll': 2,
                'highRoll': 8,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't649f1':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't750':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't750a':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't751':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't751':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't752':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't753':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't754': {
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't755':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't756':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't757a':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't757b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't758a1':{
                'lowRoll': 1,
                'highRoll': 100,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't758a2':{
                'lowRoll': 1,
                'highRoll': 100,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't758a3':{
                'lowRoll': 1,
                'highRoll': 100,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't758a4':{
                'lowRoll': 1,
                'highRoll': 100,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't758b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't759': {
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't760':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't760a':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't761a':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't761b':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't761c':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't762a':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't762b':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't762c':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't863':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't863a': {
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't863b':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't863c':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't863d':{
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't863e':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't864':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't865':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't866':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't867':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't868':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't869a': {
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't869a1':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't869b':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't870':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't870a':{
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't870b':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't871a':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't871b':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't871c':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't872':{
                'lowRoll': 1,
                'highRoll': 100,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't873': {
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't874':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't841a':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't875':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't875a':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't875b':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't875c':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't875d':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't876':{
                'lowRoll': 1,
                'highRoll': 20,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't876a':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't876b': {
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't876c':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't876d':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't876e':{
                'lowRoll': 1,
                'highRoll': 8,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't876f':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't877a':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't877b':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't877c':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't877d':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't978':{
                'lowRoll': 1,
                'highRoll': 10,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't978a':{
                'lowRoll': 1,
                'highRoll': 4,
                'modifier': null,
                'obj': null,
                'increment': true
            },
            't978b':{
                'lowRoll': 1,
                'highRoll': 6,
                'modifier': null,
                'obj': null,
                'increment': true
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

