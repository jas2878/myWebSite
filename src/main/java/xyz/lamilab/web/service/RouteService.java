package xyz.lamilab.web.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import xyz.lamilab.web.mapper.RouteMapper;

@Service
public class RouteService {

	@Resource
	private RouteMapper mapper;

	// 리스트
	public List<Map<String, Object>> listRoadMockMst(Map<String, Object> params) throws Exception {
		return mapper.listRoadMockMst(params);
	}

	public List<Map<String, Object>> listRoadMockRoute(Map<String, Object> params) throws Exception {
		return mapper.listRoadMockRoute(params);
	}

}
