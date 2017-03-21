export interface IEntry { description?: string; signature?: string; }
export interface IEntries { [name:string]:IEntry; }


export var globalfunctions: IEntries = {
        add_touch_tap: {
                description: 'Returns TouchEvent.TAP',
                signature: 'addEventListener(egret.TouchEvent.TOUCH_TAP,this.Handler,this);'
          },
         add_touch_release_outside: {
                description: 'Returns TouchEvent.RELEASE_OUTSIDE',
                signature: 'addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE,this.Handler,this);'
          },
          add_touch_begin: {
                description: 'Returns TouchEvent.TOUCH_BEGIN',
                signature: 'addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.Handler,this);'
          },
          add_touch_cancel: {
                description: 'Returns TouchEvent.TOUCH_CANCEL',
                signature: 'addEventListener(egret.TouchEvent.TOUCH_CANCEL,this.Handler,this);'
          },
          add_touch_move: {
                description: 'Returns TouchEvent.TOUCH_MOVE',
                signature: 'addEventListener(egret.TouchEvent.TOUCH_MOVE,this.Handler,this);'
          },
       
        add_event_added: {
              description: 'Returns Event.ADDED',
              signature: 'addEventListener(egret.Event.ADDED,this.Handler,this);'
        },
    
        add_event_added_to_stage: {
              description: 'Returns Event.ADDED_TO_STAGE',
              signature: 'addEventListener(egret.Event.ADDED_TO_STAGE,this.Handler,this);'
        },
      	 add_event_change: {
              description: 'Returns Event.CHANGE',
              signature: 'addEventListener(egret.Event.CHANGE,this.Handler,this);'
        },
         add_event_changeing: {
              description: 'Returns Event.CHANGING',
              signature: 'addEventListener(egret.Event.CHANGING,this.Handler,this);'
        },
        add_event_close: {
            description: 'Returns Event.CLOSE',
            signature: 'addEventListener(egret.Event.CLOSE,this.Handler,this);'
        },
        
       add_event_complete: {
            description: 'Returns Event.COMPLETE',
            signature: 'addEventListener(egret.Event.COMPLETE,this.Handler,this);'
	     },      
       add_event_connect: {
            description: 'Returns Event.CONNECT',
            signature: 'addEventListener(egret.Event.CONNECT,this.Handler,this);'
        },
       add_event_deactivate: {
            description: 'Returns Event.DEACTIVATE',
            signature: 'addEventListener(egret.Event.DEACTIVATE,this.Handler,this);'
        },
       add_event_ended: {
            description: 'Returns Event.ENDED',
            signature: 'addEventListener(egret.Event.ENDED,this.Handler,this);'
        },
        	
	    add_event_enter_frame: {
            description: 'Returns Event.ENTER_FRAME',
            signature: 'addEventListener(egret.Event.ENTER_FRAME,this.Handler,this);'
        },
        
          add_event_focus_in: {
            description: 'Returns Event.FOCUS_IN',
            signature: 'addEventListener(egret.Event.FOCUS_IN,this.Handler,this);'
	     },
       
        add_event_focus_out: {
            description: 'Returns Event.FOCUS_OUT',
            signature: 'addEventListener(egret.Event.	FOCUS_OUT,this.Handler,this);'
	     },
        
        add_event_leave_Stage: {
            description: 'Returns Event.LEAVE_STAGE',
            signature: 'addEventListener(egret.Event.LEAVE_STAGE,this.Handler,this);'
        },
         add_event_loop_complete: {
            description: 'Returns Event.LOOP_COMPLETE',
            signature: 'addEventListener(egret.Event.LOOP_COMPLETE,this.Handler,this);'
        },
         add_event_removed: {
            description: 'Returns Event.REMOVED',
            signature: 'addEventListener(egret.Event.REMOVED,this.Handler,this);'
        },
         add_event_removed_from_stage: {
            description: 'Returns Event.REMOVED_FROM_STAGE',
            signature: 'addEventListener(egret.Event.REMOVED_FROM_STAGE,this.Handler,this);'
        },	
          add_event_render: {
            description: 'Returns Event.RENDER',
            signature: 'addEventListener(egret.Event.RENDER,this.Handler,this);'
        },	
         add_event_resize: {
            description: 'Returns Event.RESIZE',
            signature: 'addEventListener(egret.Event.RESIZE,this.Handler,this);'
        },		
             
        add_event_sound_complete: {
            description: 'Returns Event.SOUND_COMPLETE',
            signature: 'addEventListener(egret.Event.SOUND_COMPLETE,this.Handler,this);'
        },
       add_event_io_error: {
            description: 'Returns IOErrorEvent.IO_ERROR',
            signature: 'addEventListener(egret.IOErrorEvent.IO_ERROR,this.Handler,this);'
        },
        add_event_link: {
            description: 'Returns TextEvent.LINK',
            signature: 'addEventListener(egret.TextEvent.LINK,this.Handler,this);'
        },
  
         add_movieclip_frame_label: {
            description: 'Returns MovieClipEvent.FRAME_LABEL',
            signature: 'addEventListener(egret.MovieClipEvent.FRAME_LABEL,this.Handler,this);'
        },
 
        add_progress_socket_data: {
            description: 'Returns ProgressEvent.SOCKET_DATA',
            signature: 'addEventListener(egret.ProgressEvent.SOCKET_DATA,this.Handler,this);'
        },
        add_progress_progress: {
            description: 'Returns ProgressEvent.PROGRESS ',
            signature: 'addEventListener(egret.ProgressEvent.PROGRESS,this.Handler,this);'
        }, 
        add_timer: {
                description: 'Returns TimerEvent.TIMER',	
                signature: 'addEventListener(egret.TimerEvent.TIMER,this.Handler,this);'
	        },
        add_timer_complete: {
                description: 'Returns TimerEvent.TIMER_COMPLETE',	
                signature: 'addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.Handler,this);'
	        },
        add_res_config_complete: {
            description: 'Returns RES.ResourceEvent.CONFIG_COMPLETE ',
            signature: 'addEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.Handler,this);'
        },
        add_res_group_complete: {
            description: 'Returns RES.ResourceEvent.GROUP_COMPLETE ',
            signature: 'addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.Handler,this);'
        },
        add_res_group_progress: {
            description: 'Returns RES.ResourceEvent.GROUP_PROGRESS ',
            signature: 'addEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.Handler,this);'
        },
        add_res_group_load_error: {
            description: 'Returns RES.ResourceEvent.GROUP_LOAD_ERROR ',
            signature: 'addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.Handler,this);'
        },
        add_eui_change_end: {
            description: 'Returns eui.UIEvent.CHANGE_END ',
            signature: 'addEventListener(eui.UIEvent.CHANGE_END,this.Handler,this);'
        },
        add_eui_change_start: {
            description: 'Returns eui.UIEvent.CHANGE_START ',
            signature: 'addEventListener(eui.UIEvent.CHANGE_START,this.Handler,this);'
        },
         add_eui_closing: {
            description: 'Returns eui.UIEvent.CLOSING ',
            signature: 'addEventListener(eui.UIEvent.CLOSING,this.Handler,this);'
        },
         add_eui_creation_complete: {
            description: 'Returns eui.UIEvent.CREATION_COMPLETE ',
            signature: 'addEventListener(eui.UIEvent.CREATION_COMPLETE,this.Handler,this);'
        },
        
        add_egret3d_change: {
            description: 'Returns egret3d.Event3D.CHANGE ',
            signature: 'addEventListener(egret3d.Event3D.CHANGE,this.Handler,this);'
        },
      
          add_egret3d_complete: {
            description: 'Returns egret3d.Event3D.COMPLETE ',
            signature: 'addEventListener(egret3d.Event3D.COMPLETE,this.Handler,this);'
        },
         add_egret3d_enter_frame: {
            description: 'Returns egret3d.Event3D.ENTER_FRAME ',
            signature: 'addEventListener(egret3d.Event3D.ENTER_FRAME,this.Handler,this);'
        },
         add_egret3d_resize: {
            description: 'Returns egret3d.Event3D.RESIZE ',
            signature: 'addEventListener(egret3d.Event3D.RESIZE,this.Handler,this);'
        },
           add_egret3d_loader_complete: {
            description: 'Returns egret3d.LoaderEvent3D.LOADER_COMPLETE ',
            signature: 'addEventListener(egret3d.LoaderEvent3D .LOADER_COMPLETE,this.Handler,this);'
        },
         add_egret3d_loader_error: {
            description: 'Returns egret3d.LoaderEvent3D.LOADER_ERROR ',
            signature: 'addEventListener(egret3d.LoaderEvent3D.LOADER_ERROR,this.Handler,this);'
        },
         add_egret3d_loader_progress: {
            description: 'Returns egret3d.LoaderEvent3D.LOADER_PROGRESS ',
            signature: 'addEventListener(egret3d.LoaderEvent3D.LOADER_PROGRESS,this.Handler,this);'
        },
         add_egret3d_mouse_click: {
            description: 'Returns egret3d.MouseEvent3D.MOUSE_CLICK ',
            signature: 'addEventListener(egret3d.MouseEvent3D.MOUSE_CLICK,this.Handler,this);'
        },
         add_egret3d_mouse_down: {
            description: 'Returns egret3d.MouseEvent3D.MOUSE_DOWN ',
            signature: 'addEventListener(egret3d.MouseEvent3D.MOUSE_DOWN,this.Handler,this);'
        },
         add_egret3d_mouse_move: {
            description: 'Returns egret3d.MouseEvent3D.MOUSE_MOVE ',
            signature: 'addEventListener(egret3d.MouseEvent3D.MOUSE_MOVE,this.Handler,this);'
        },
         add_egret3d_mouse_over: {
            description: 'Returns egret3d.MouseEvent3D.MOUSE_OVER ',
            signature: 'addEventListener(egret3d.MouseEvent3D.MOUSE_OVER,this.Handler,this);'
        },
        add_egret3d_mouse_up: {
            description: 'Returns egret3d.MouseEvent3D.MOUSE_UP ',
            signature: 'addEventListener(egret3d.MouseEvent3D.MOUSE_UP,this.Handler,this);'
        },
        
        add_egret3d_mouse_wheel: {
            description: 'Returns egret3d.MouseEvent3D.MOUSE_WHEEL ',
            signature: 'addEventListener(egret3d.MouseEvent3D.MOUSE_WHEEL,this.Handler,this);'
        },
         add_egret3d_key_click: {
            description: 'Returns egret3d.KeyEvent3D.KEY_CLICK ',
            signature: 'addEventListener(egret3d.KeyEvent3D.KEY_CLICK,this.Handler,this);'
        },
         add_egret3d_key_down: {
            description: 'Returns egret3d.KeyEvent3D.KEY_DOWN ',
            signature: 'addEventListener(egret3d.KeyEvent3D.KEY_DOWN,this.Handler,this);'
        },
         add_egret3d_key_up: {
            description: 'Returns egret3d.KeyEvent3D.KEY_UP ',
            signature: 'addEventListener(egret3d.KeyEvent3D.KEY_UP,this.Handler,this);'
        },
         add_egret3d_touch_end: {
            description: 'Returns egret3d.TouchEvent3D.TOUCH_END ',
            signature: 'addEventListener(egret3d.TouchEvent3D.TOUCH_END,this.Handler,this);'
        },
          add_egret3d_touch_move: {
            description: 'Returns egret3d.TouchEvent3D.TOUCH_MOVE ',
            signature: 'addEventListener(egret3d.TouchEvent3D.TOUCH_MOVE,this.Handler,this);'
        },
         add_egret3d_touch_start: {
            description: 'Returns egret3d.TouchEvent3D.TOUCH_START ',
            signature: 'addEventListener(egret3d.TouchEvent3D.TOUCH_START,this.Handler,this);'
        }, 
         add_egret3d_parser_complete: {
            description: 'Returns egret3d.ParserEvent3D.PARSER_COMPLETE ',
            signature: 'addEventListener(egret3d.ParserEvent3D.PARSER_COMPLETE,this.Handler,this);'
        },  
         add_egret3d_pick_click: {
            description: 'Returns egret3d.PickEvent3D.PICK_CLICK ',
            signature: 'addEventListener(egret3d.PickEvent3D. PICK_CLICK,this.Handler,this);'
        },  
          add_egret3d_pick_down: {
            description: 'Returns egret3d.PickEvent3D.PICK_DOWN ',
            signature: 'addEventListener(egret3d.PickEvent3D.PICK_DOWN,this.Handler,this);'
        },  
          add_egret3d_pick_move: {
            description: 'Returns egret3d.PickEvent3D.PICK_MOVE ',
            signature: 'addEventListener(egret3d.PickEvent3D.PICK_MOVE,this.Handler,this);'
        },   
         add_egret3d_pick_up: {
            description: 'Returns egret3d.PickEvent3D.PICK_UP ',
            signature: 'addEventListener(egret3d.PickEvent3D.PICK_UP,this.Handler,this);'
        },    
          add_egret3d_pick_wheel: {
            description: 'Returns egret3d.PickEvent3D.PICK_WHEEL ',
            signature: 'addEventListener(egret3d.PickEvent3D.PICK_WHEEL,this.Handler,this);'
        }	 	
                       
}