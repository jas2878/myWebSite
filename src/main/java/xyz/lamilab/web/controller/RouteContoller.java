package xyz.lamilab.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import xyz.lamilab.web.service.RouteService;

@RestController
public class RouteContoller {

	@Resource
	private RouteService service;

	@GetMapping("favicon.ico")
	void returnNoFavicon() {
	}

	@GetMapping("/route/road_mst_list")
	public Map<String, Object> listRoadMockMst(@RequestParam Map<String, Object> params) throws Exception {

		List<Map<String, Object>> list = service.listRoadMockMst(params);

		Map<String, Object> result = new HashMap<String, Object>();
		result.put("list", list);

		return result;
	}

	// 대피로 리스트 -> 노드, 링크 포함
	@GetMapping("/route/road_Route_list")
	public Map<String, Object> listRoadMockRoute(@RequestParam Map<String, Object> params) throws Exception {
		Map<String, Object> result = new HashMap<String, Object>();

		List<Map<String, Object>> list = service.listRoadMockRoute(params);// 표준노드링크
		result.put("route_list", list);

		return result;
	}

}
