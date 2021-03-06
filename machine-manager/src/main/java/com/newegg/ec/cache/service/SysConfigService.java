package com.newegg.ec.cache.service;

import com.newegg.ec.cache.model.entity.SystemConfig;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * Created by lf52 on 2018/3/16.
 */
@Repository
public interface SysConfigService {


    public List<SystemConfig> getConfigList(Map<String, Object> param);

    public SystemConfig getConfig(String key);

    public boolean add(SystemConfig config);

    public boolean update(SystemConfig config);

    public boolean delete(String key);


}
