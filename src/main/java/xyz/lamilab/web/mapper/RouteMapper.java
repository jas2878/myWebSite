package xyz.lamilab.web.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface RouteMapper {

	List<Map<String, Object>> listRoadMockMst(Map<String, Object> params);

	List<Map<String, Object>> listRoadMockRoute(Map<String, Object> params);

}
